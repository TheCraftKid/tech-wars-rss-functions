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
  public async updatePodcast(episode: PodcastEpisode) {
    const rss = await this.fetchPodcasts();
  }

  /**
   * Fetches the podcasts from 
   */
  public async fetchPodcasts(): Promise<string> {
    return await fetchRSS();
  }
}