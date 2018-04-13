import { Injectable } from '@angular/core';
import { matchMedia } from './functions/match-media';
@Injectable({
  providedIn: 'root'
})
export class MatchMediaService {
  matchMedia(mediaQuery: string): MediaQueryList {
    return matchMedia(mediaQuery);
  }
}
