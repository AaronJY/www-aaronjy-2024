---
title: Performance considerations when writing a TCP game server in dotnet
pubdate: 2025-02-23T21:12:37.864Z
desc: While writing a TCP game server in dotnet for a hobby project, I learned a few ways to improve the efficiency and scalability of the server while running into some performance issues. Here's what I learned!
---

While writing a TCP game server in dotnet for a hobby project (check it out [here](https://github.com/AaronJY/GServer)), I learned a few ways to improve the efficiency and scalability of the server while running into some performance issues.

Here's what I learned!

## 1. Use ConcurrentDictionary to main a thread-safe record of connect clients

The [ConcurrentDictionary<TKey, TValue>](https://learn.microsoft.com/en-us/dotnet/api/system.collections.concurrent.concurrentdictionary-2?view=net-9.0) class is a thread-safe dictionary class provided by dotnet. It differs from the standard `Dictionary<TKey, TValue>` class in that it supports thread-safe read and write access by multiple threads concurrently. As my game server utilises the dotnet thread pool (through async/await), it's vital to use a thread-safe dictionary implementation to keep track of connected clients, as many threads in the thread pool will be used as more and more clients connect, meaning many threads will be reading from/writing to the dictionary I use to track connected clients.

I define my dictionary, which creates a pairing between a connected TcpClient and a `ClientState` instance I use to track client-specific state, such as the player's username, last heartbeat, etc.

```c#
private readonly ConcurrentDictionary<TcpClient, ClientState> _clients = new();
```

When a client connects, I add them to the dictionary.

```c#
TcpClient client = await _tcpListener.AcceptTcpClientAsync();

ClientState clientState = new(client);
_clients.TryAdd(client, clientState);

// Handle client asynchronously using the thread pool
_ = Task.Run(() => HandleClientAsync(client, clientState));
```
 
## 2. Use async await to utilise a thread pool to handle connections at scale

My first iteration of the game server relied on manually creating a worker thread for each connected client. While this may be find for handling a small handful of clients (100-500 perhaps), I want my game server to be as performant and scalable as possible.

The bottlenecks introduced by this approach are memory usage and CPU load:

**Memory usage**

When creating a new thread in dotnet, the OS assigns it its own memory region called the 'stack' which is used for holding thread-specific memory such as variables, execution state, and other bits. The default stack size (as configured by the OS) is usually 1MB. Using a thread per connection means allocating a 1MB per connection for each thread stack, which in practice means 1000 connections * 1MB per stack = 1GB of memory. This puts a massive bottleneck on the number of connections my server can handle! 

**CPU load**

Spawning thousands of threads also introduced a CPU load bottleneck in the form of 'context switching'. The CPU can only handle so many threads simultaneoulsy, roughly equal to the number of logical cores (e.g. 4 CPU cores = 4 threads, 8 with hyper threading = 16 threads, etc.) When the number of threads exceeds the number of cores avaialble, the CPU starts to 'context switch' which essentially means it flicks through all of the running threads giving them all a chance to run. This switching requires the CPU to work, which increases CPU load which would be better used processing game server requests (rather than switching between thosands of running threads!)

```c#
TcpClient client = await _tcpListener.AcceptTcpClientAsync(); // <-- Async accpept TCP client

ClientState clientState = new(client);
_ = _clients.TryAdd(client, clientState);

_ = HandleClientAsync(client, clientState).ContinueWith(t =>
{
    if (t.Exception != null)
    {
        Console.WriteLine($"Error handling client: {t.Exception.InnerException?.Message}");
    }
}, TaskContinuationOptions.OnlyOnFaulted);
```

## 3. Use ArrayPool for memory-efficient storage of buffers

When reading data sent by a TCP client to the server (in my case, the game client has sent a load of data to the server that I want to read), the standard approach is to create a 'buffer', which is essentially a place in-memory we reserve to store our client's data for processing.

My initial approach was to create a new buffer of type `byte[]` and store the data in there. While this may not be a problem for lower-traffic game servers, I want my game server to be as performant as possible! The downside of this approach is that we allocate a new place in memory every time we process data sent b the client, which means:
1. We have to reserve a new chunk of memory every time a client sends us data, and...
2. The garbage collector has to dispose of each buffer (i.e. free up that memory) every time it finishes processing said data

A great way to optimise this approach is by using dotnet's `ArrayPool<T>`, which is a dotnet-manged pool of arrays of any given type. This way, we ask dotnet for one of its arrays every time we want to store client data in a buffer for processing, and we simply release it (i.e. give it back to the pool) when we're done. Because dotnet manages this pool--the memory is already allocated and managed by dotnet for the arrays in its pool--we don't have to reserve and release memory for every buffer, releieving pressure on both our server's memory and CPU too, as the garbage collector has nothing to clean up!

```c#
// Get a new array for the buffer from the pool
byte[] buffer = ArrayPool<byte>.Shared.Rent(client.ReceiveBufferSize);

try
{
    while (client.Connected)
    {
        int bytesRead = await stream.ReadAsync(buffer, 0, buffer.Length);
        if (bytesRead == 0)
            break;

        await messageHandler.HandleMessageAsync(stream.Socket, new MessageMemoryStream(buffer), state);
    }
}
catch (Exception e)
{
    Console.WriteLine($"Error occured reading buffer: {e.Message}");
}
finally
{
    // Give the array back to the pool!
    ArrayPool<byte>.Shared.Return(buffer);
}
```

## Source code

You can find the source code for the game server on GitHub: https://github.com/AaronJY/GServer