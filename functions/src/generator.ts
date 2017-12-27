/**
 * Generates an RSS snippet for a podcast for Google Play Music.
 */
function generatePodcast(podcast: Podcast) {
  return `<title>${podcast.title}</title>
          <googleplay:author>${podcast.author}</googleplay:author>
          <googleplay:email>${podcast.email}</googleplay:email>
          <googleplay:image>${podcast.image}</googleplay:image>
          <googleplay:description>${podcast.description}</googleplay:description>
          <link>${podcast.link}</link>
          <googleplay:explicit>${podcast.explicit ? 'true' : 'false'}</googleplay:explicit>`
}

/**
 * Generates an RSS snippet for an episode of a podcast with the given information.
 */
function generateEpisode(episode: PodcastEpisode) {
  return `<item>${episode.item}</item>
          <title>${episode.title}</title>
          <enclosure url="${episode.enclosure.url}" length="${episode.enclosure.length}
                  type="${episode.enclosure.type}">
          </enclosure>
          <googleplay:description>${episode.description}</googleplay:description>
          <itunes:summary>${episode.description}</itunes:summary>
          <description>${episode.description}</description>
          <guid>${episode.guid}</guid>
          <pubDate>${episode.pubDate}</pubDate>
          <googleplay:explicit>${episode.explicit ? 'Yes' : 'No'}</googleplay:explicit>
          <itunes:explicit>${episode.explicit ? 'yes' : 'no'}</itunes:explicit>
          <itunes:order>${episode.order}</itunes:order>
          <googleplay:block>${episode.block ? 'yes' : 'no'}</googleplay:block>
          <itunes:block>${episode.block ? 'yes' : 'no'}</itunes:block>`;

}

/**
 * A container
 */
interface Enclosure {
  url: string,
  length: number,
  type: string,
}

/**
 * The subject of a {@link Podcast}.
 */
enum Category {
  'Arts',
  'Business',
  'Comedy',
  'Education',
  'Games & Hobbies',
  'Government & Organizations',
  'Health',
  'Kids & Family',
  'Music',
  'News & Politics',
  'Religion & Spirituality',
  'Science & Medicine',
  'Society & Culture',
  'Sports & Recreation',
  'TV & Film',
  'Technology',
}

/**
 * A podcast that is associated with some {@link PodcastEpisode}s, built for 
 * Google Play and iTunes distribution.
 * 
 * @param title {string} Name of the podcast
 * @param author {string} Author of your podcast (up to 255 characters)
 * @param email {string} Email address to authenticate podcast ownership 
 *                       (up to 255 characters)
 * @param image {string} Image shown on Google Play Music to identify your 
 *                       podcast (URL can include up to 2048 characters).
 *                       The image needs to be: Square, minimum of 600 x 600
 *                       pixels (Recommended: Between 1200 x 1200 and 7000 x 
 *                       7000 pixels), maximum of 7000 x 7000 pixels, and in
 *                       JPEG or PNG format
 *                       Note: A podcast needs an image at least 1200 x 1200 
 *                       pixels in size to be eligible for featuring. 
 * @param description {string} Description of your podcast (up to 
 *                             4000 characters)
 * @param language {string} Language used in the podcast: Language values from 
 *                          the ISO 639 list (two-letters, with some possible 
 *                          modifiers like "en-us") can be used.
 * @param link {string?} Link to an external page for your podcast
 * @param explicit {boolean?} Indicates if your podcast includes explicit content
 * @param category {string?} One of: Arts, Business, Comedy, Education, 
 *                           Games & Hobbies, Government & Organizations, Health,
 *                           Kids & Family, Music, News & Politics, 
 *                           Religion & Spirituality, Science & Medicine, 
 *                           Society & Culture, Sports & Recreation, TV & Film, 
 *                           Technology
 */
interface Podcast {
  title: string,
  author: string,
  email: string,
  image: string,
  description: string,
  language: string,
  link?: string,
  explicit?: boolean,
  category?: Category,
}

/**
 * An episode of a {@link Podcast}, built for Google Play and 
 * iTunes distribution.
 * 
 * @param item {string[]} Tags data for single episode - at least one complete 
 *                        <item> tag needs to be included in a feed.
 * @param title {string} Title of the podcast episode
 * @param enclosure {Enclosure} The url parameter specifies where the podcast 
 *                              is available. The length and type parameters 
 *                              are also required.	
 * @param description {string} Description of an episode displayed to users
 * @param guid {string?} Permanent, case-sensitive Globally Unique Identifier 
 *                       for a podcast episode
 * @param pubDate {string?} Publication date shown to users; if this isn’t 
 *                          included, the date the feed was crawled may be 
 *                          used instead.	
 * @param explicit {boolean=false} Indicates if this podcast episode includes
 *                                 explicit content
 * @param order {number?} Specifies the order/position of this episode in 
 *                        a podcast
 * @param block {boolean?} Indicates an episode should be blocked from being
 *                         published on Google Play.
 */
interface PodcastEpisode {
  item: string[],
  title: string,
  enclosure: Enclosure,
  description: string,
  guid?: string,
  pubDate?: string,
  explicit?: boolean,
  order?: number,
  block?: boolean,
}
