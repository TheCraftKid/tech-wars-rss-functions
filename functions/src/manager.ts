import { PodcastEpisode, Podcast } from "./generator";
import { fetchRSS } from "./fetcher";

/**
 * Utility class that handles creation, reading, updating, and deletion of
 * {@link PodcastEpisode}s.
 */
export class PodcastManager {

  public createPodcast(podcast: Podcast) {
    // TODO
  }

  /**
   * Appends the given episode to the podcast's RSS feed. 
   * 
   * @param episode {PodcastEpisode} The episode to 
   */
  public updatePodcast(episode: PodcastEpisode) {
    const rss = fetchRSS()
  }

  /**
   * Fetches the podcasts from 
   */
  public async fetchPodasts(): Promise<string> {
    return await fetchRSS();
  }
}