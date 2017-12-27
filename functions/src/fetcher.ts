import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { BUCKET_NAME, RSS_TEMPLATE_NAME, DOWNLOAD_LOCATION } from './config';

admin.initializeApp({
  credential: admin.credential.cert(functions.config().firebase),
});

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
