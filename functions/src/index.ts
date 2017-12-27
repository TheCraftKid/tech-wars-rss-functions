import * as functions from 'firebase-functions';
import { Request, Response } from 'express';
import { PodcastManager } from './manager';

const getRSSFeed = functions.https.onRequest(
  async (req: Request, res: Response) => {
    try {
      const rss = await new PodcastManager().fetchPodasts();
      // Poor little application/rss+xml; text/xml is de facto standard
      res.header('Content-Type', 'text/xml; charset=UTF-8'); 
      res.status(200).send(rss);
    } catch (err) {
      console.error(`Couldn't fetch RSS feed`, err);
      res.header('Content-Type', 'text/plain');
      res.status(500).send('Could not fetch RSS');
    }
  });

const updateRSSFeed = functions.https.onRequest(
  (req: Request, res: Response) => {
    if (!req.is('application/json')) {
      res.header('Allow', 'application/json');
      res.status(400).send('Only JSON requests are accepted.');
    }
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    switch (req.method) {
      case 'POST':
        break;
      default:
        res.header('Allow', 'POST');
        res.send(405).send('Only POST requests are accepted.');
        break;
    }
  });

export {
  getRSSFeed,
  updateRSSFeed,
}