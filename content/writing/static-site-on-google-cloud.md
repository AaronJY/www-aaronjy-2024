---
title: Deploying aaronjy.me on a Google Storage bucket
pubdate: 2024-05-01T00:00:00.000Z
desc: "Google Cloud Storage is an effective solution for hosting static sites, offering a simple and scalable way to manage web assets. A manual deployment strategy involves four key steps: backing up existing files to a backup bucket, removing sensitive files for security, uploading the latest site files from the build directory, and invalidating Google’s global cache to ensure users access updated content."
---
Google actually has [documentation](https://cloud.google.com/storage/docs/hosting-static-website) on how to deploy a static site to a storage bucket, but I wanted to talk about how I handle deployments, as Google doesn't covert that!

## Networking

This site is just a collection of static assets (HTML, JS, CSS and images) that live inside a Google Cloud Storage bucket. When you load the site, the below route is taken once your request reaches GCP.

![Route diagram showing networking path from user to destination on GCP](/img/screenshot-2024-03-13-at-11.58.55.png "Route diagram showing networking path from year to destination on GCP")

1. As you can see, you:
2. Hit a load balancer, which then
3. Directs you to a backend service, which then
4. Decides either to either a) serve content directly from the storage bucket, or
  b) service it from the cache (if available)

The setup is pretty simple, and doesn't really deviate from Google's suggested setup configuration for static sites hosted from a bucket.

## Deploying

Setting up a seamless deployment strategy gets a little tricker, however. I opted to set up a manual deployment strategy, which involves calling `npm run deploy` to kick off the deployment. This in turn calls a bash script that handles the deployment.

The script consists of 4 deployment steps:

1. Backup existing bucket files to a backup bucket
2. Remove sensitive files before deploying (e.g. `admin/index.html` for Decap CMS)
3. Upload the latest files to the hosting bucket
4. Invalidate Google's cache, so users receive the latest version of the site

### Step 1 - Backing up existing files

Before we do anything, we need to back up what we have already. I created a storage bucket specifically for holding backup files for this purpose, and use the gcloud CLI to copy the live files across to the backup bucket.

```
BUCKET_URL="gs://aaronjy-www"
BACKUP_BUCKET_URL="gs://aaronjy-www-backup"

echo "------------------------------"
echo "BACKUP CURRENT SITE FILES"
echo "------------------------------"

TIMESTAMP=$(date +%Y-%m-%d_%H:%M:%S)
gcloud transfer jobs create $BUCKET_URL $BACKUP_BUCKET_URL/$(date +%Y-%m-%d_%H:%M:%S)/ --no-async --delete-from=source-after-transfer;
```

The backed-up files are copied into a dated folder, and the `--delete-from` flag ensures the live websites files are deleted from the hosting bucket once they've been backed up.

### Step 2 - Removing sensitive files

Because I'm using Decap CMS for content management locally, I need to manually remove the `admin/` folder where Decap lives, as I don't want that to be available on the live site.

```
echo "------------------------------"
echo "REMOVE SENSITIVE FILES"
echo "------------------------------"

rm -rfv ./out/admin/
```

### Step 3 - Upload files to hosting bucket

Now we come to actually uploading the new files to the live site. I take everything from the `/out` directory (where Next.js throws its build output) and upload them directly to the hosting bucket.

```
echo "------------------------------"
echo "UPLOADING NEW SITE FILES"
echo "------------------------------"

gcloud storage cp --recursive ./out/* $BUCKET_URL --gzip-in-flight-all
```

The `--gzip-in-flight-all` is a handy edition, as the cli will apply gzip compression locally, and Google will uncompress them before dumping them in the bucket on the other end, resulting in a lower upload size/quicker deployment time.

### Step 3 - Invalidate the global cache

As Google uses a global cache for bucket files, we must invalidate it to ensure users get the latest website version.

```
echo "------------------------------"
echo "INVALIDATING GLOBAL CACHE"
echo "------------------------------"

echo "WARNING: This is an async operation that can take upwards of 10 minutes depending on how fast Google Cloud CDN invalidates its cache. It does take around 10 minutes on average."

gcloud compute url-maps invalidate-cdn-cache lb-aaronjy-www --path "/*" --async
```

This can take anywhere between 7-10 minutes, so the `--async` flag has been applied because we don't need to sit and wait for it.

### Full deployment script

Here's the deployment script in full:

```
BUCKET_URL="gs://aaronjy-www"
BACKUP_BUCKET_URL="gs://aaronjy-www-backup"

echo "------------------------------"
echo "BACKUP CURRENT SITE FILES"
echo "------------------------------"

TIMESTAMP=$(date +%Y-%m-%d_%H:%M:%S)
gcloud transfer jobs create $BUCKET_URL $BACKUP_BUCKET_URL/$(date +%Y-%m-%d_%H:%M:%S)/ --no-async --delete-from=source-after-transfer;

echo "------------------------------"
echo "REMOVE SENSITIVE FILES"
echo "------------------------------"

rm -rfv ./out/admin/

echo "Removed all sensitive files."

echo "------------------------------"
echo "UPLOADING NEW SITE FILES"
echo "------------------------------"

gcloud storage cp --recursive ./out/* $BUCKET_URL --gzip-in-flight-all

echo "------------------------------"
echo "INVALIDATING GLOBAL CACHE"
echo "------------------------------"

echo "WARNING: This is an async operation that can take upwards of 10 minutes depending on how fast Google Cloud CDN invalidates its cache. It does take around 10 minutes on average."

gcloud compute url-maps invalidate-cdn-cache lb-aaronjy-www --path "/*" --async

echo "------------------------------"
echo "DONE!"
echo "------------------------------"
```
