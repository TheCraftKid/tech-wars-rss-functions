import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp({
  credential: admin.credential.cert(functions.config().firebase),
});

const BUCKET_NAME = 'tech-wars';

/**
 * The file name of the RSS template on Google Cloud Storage.
 */
const RSS_TEMPLATE_NAME = 'template.rss'

const DOWNLOAD_LOCATION = '/tmp/default.rss';

/**
 * Fetches the file named {@link RSS_TEMPLATE_NAME} in the {@link BUCKET_NAME]}
 * bucket.
 */
async function fetchRSS(): Promise<string> {
  try {
    const download = await admin.storage().bucket(BUCKET_NAME)
      .file(RSS_TEMPLATE_NAME)
      .download({
        destination: DOWNLOAD_LOCATION,
      });
    console.log(`gs://tech-wars/${RSS_TEMPLATE_NAME} downloaded to 
        ${DOWNLOAD_LOCATION}`);
    return download[0].toString();
  } catch (err) {
    console.error('Could not download RSS file', err);
    throw new Error('Could not download RSS');
  }
}
