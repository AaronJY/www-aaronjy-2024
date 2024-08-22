import Head from 'next/head'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import ExternalLink from '@/components/ExternalLink/ExternalLink'

export default function Home () {
  return (
    <DefaultLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section>
        <h1>Hello!</h1>
        <p>
          I&apos;m Aaron, a Brit living in Newcastle-upon-tyne, UK. I
          work professionally as a Software Engineer, and study
          languages, history and philosophy in my spare time.
        </p>
        <p>
          This is my little corner of the web! I&apos;ve always had a habit of
          &apos;lurking&apos; online; I barely interact with the content I
          consume, and you&apos;ll rarely if ever catch me posting or commenting
          on something. This little site endeavours to encourage me
          to share a bit more about myself online.
        </p>
      </section>

      <section>
        <h2>Tech I Like</h2>
        <ul>
          <li>
            <strong>Web Development:</strong> I primarily use Node.js with TypeScript
            (or JavaScript for smaller projects) alongside Next.js to build websites
            and applications.
          </li>
          <li>
            <strong>Scripting:</strong> My preferred scripting languages are Python
            and JavaScript, as I&apos;m well-versed in them and they offer extensive
            libraries that typically cover my needs.
          </li>
          <li>
            <strong>API and Backend Development:</strong> For more robust API or backend
            architecture, I often choose .NET Core with C# and ASP.NET. The strongly-typed
            nature of C# and the structured framework of ASP.NET help maintain clean and
            organised code.
          </li>
          <li>
            <strong>Cloud Hosting:</strong> When possible, I opt for hosting on a
            DigitalOcean droplet. If more extensive cloud services are required, I usually
            opt for Google Cloud Platform (GCP), which I find more user-friendly than Azure
            or AWS. I also self-host services on shared server hosting running Ubuntu Server, typically with Hetzner.
          </li>
        </ul>

      </section>

      <section>
        <h2>Where to find me</h2>

        <ul>
          <li>
            <strong>
              <ExternalLink href='https://letterboxd.com/aaronyarbz/'>
                Letterboxd
              </ExternalLink>
            </strong>{' '}
            is a social platform for film lovers to rate, review, and discover
            movies, akin to &quot;Goodreads for film.&quot;
          </li>
          <li>
            <strong>
              <ExternalLink href='https://github.com/AaronJY'>
                GitHub
              </ExternalLink>
            </strong>{' '}
            is a web-based platform for version control and collaboration on
            software development projects. Find out what I&apos;ve been working
            on here!
          </li>
          <li>
            <strong>
              <ExternalLink href='https://www.linkedin.com/in/aaronjyarborough/'>
                LinkedIn
              </ExternalLink>
            </strong>
            , unfortunately. A social network for professionals.
          </li>
        </ul>
      </section>

      <section>
        <h2>About this site</h2>
        <p>www.aaronjy.me is a static site (i.e. a bunch of HTML, JS, CSS and image files) written in JavaScript using Next.js. Tacit is being used as a micro CSS framework, and various smaller bits of custom CSS have been applied on top.</p>
        <p>The site is hosted inside a Google Cloud Storage bucket with a load balancer sat in front of it. The load balancer is required as Cloud Storage doesn&apos;t support a) custom domains, b) HTTPS out of the box or c) a global CDN solution.</p>
        <p>One of the biggest benefits of a website made of simple static files and assets is that I can deploy it easily, almost anywhere, and for very little money.</p>

      </section>
    </DefaultLayout>
  )
}
