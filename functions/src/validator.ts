import { Request } from "express";

function validatePodcastUpdateRequest(request: Request): Promise<void | InvalidReason> {
  switch (request.method) {
    default:
      return Promise.reject('method');
    case 'POST':
      // TODO: Handle params
      return null;
  }
}

enum InvalidReason {
  'method', 
  'other',
}