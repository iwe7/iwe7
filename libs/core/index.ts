export { Iwe7CoreModule } from './src/core.module';
export { Iwe7Base } from './src/base-component';
export { GetViewRefDirective } from './src/get-view-ref.directive';
export { LoggerService, IWE7_LOGGER_SHOW } from './src/logger.service';
export { UuidService } from './src/uuid.service';
export { ScrollService } from './src/scroll.service';
export { HostClassService } from './src/host-class.service';
export { MatchMediaService } from './src/match-media.service';

//
export * from './src/overlay-position-map';

// functions
export { matchMedia } from './src/functions/match-media';
export {
  reqAnimFrame,
  cancelRequestAnimationFrame
} from './src/functions/request-animation';
export { trimWhiteSpace } from './src/functions/trim-whitespace';

// nz
import { HostClassService } from './src/host-class.service';
import { Renderer2 } from '@angular/core';
export class NzUpdateHostClassService extends HostClassService {
  constructor(renderer: Renderer2) {
    super(renderer);
  }
}

import { MatchMediaService } from './src/match-media.service';
export class NzMatchMediaService extends MatchMediaService {}

import { ScrollService } from './src/scroll.service';
export class NzScrollService extends ScrollService {}


