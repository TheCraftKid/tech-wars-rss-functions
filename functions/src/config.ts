/**
 * The Google Cloud Storage bucket to fetch the {@link RSS_TEMPLATE_NAME}.
 */
const BUCKET_NAME = 'tech-wars';

/**
 * The file name of the RSS template on Google Cloud Storage.
 */
const RSS_TEMPLATE_NAME = 'template.rss'

/**
 * The local function download location to temporarily store the RSS file.
 */
const DOWNLOAD_LOCATION = '/tmp/default.rss';

export { BUCKET_NAME, RSS_TEMPLATE_NAME, DOWNLOAD_LOCATION };