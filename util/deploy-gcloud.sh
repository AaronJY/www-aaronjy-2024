BUCKET_URL="gs://aaronjy-www"
BACKUP_BUCKET_URL="gs://aaronjy-www-backup"

echo "------------------------------"
echo "DELETING CURRENT SITE FILES"
echo "------------------------------"

gcloud storage rm $BUCKET_URL/**

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
