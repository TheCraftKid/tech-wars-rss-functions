import * as functions from 'firebase-functions';
import { Request } from 'express';
import { Response } from 'express-serve-static-core';

export const getRSSFeed = functions.https.onRequest(
  (req: Request, res: Response) => {


  });

export const updateRSSFeed = functions.https.onRequest(
  (req: Request, res: Response) => {
    if (!req.is('application/json')) {
      res.header('Allow: ')
      res.status(400).send('Only JSON requests are accepted.');
    }
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    switch (req.method) {
      case 'POST':
        break;
      default:
        res.header('Allow: POST');
        res.send(405).send('Only POST requests are accepted.');
        break;
    }
  });