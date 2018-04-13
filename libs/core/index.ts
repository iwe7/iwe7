export { Iwe7CoreModule } from './src/core.module';
export { Iwe7Base } from './src/base-component';
export { GetViewRefDirective } from './src/get-view-ref.directive';
export { LoggerService, IWE7_LOGGER_SHOW } from './src/logger.service';
export { UuidService } from './src/uuid.service';
export { ScrollService } from './src/scroll.service';
export { HostClassService } from './src/host-class.service';
export { MatchMediaService } from './src/match-media.service';

export interface KeyValue {
  [key: string]: any;
}

export interface SchemaFormItem {
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  validators?: {
    [key: string]: {
      limit: string;
      msg: string;
    };
  };
}

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
import { ScrollService } from './src/scroll.service';
import { Injectable } from '@angular/core';
import { MatchMediaService } from './src/match-media.service';
@Injectable({
  providedIn: 'root'
})
export class NzUpdateHostClassService extends HostClassService {}
@Injectable({
  providedIn: 'root'
})
export class NzMatchMediaService extends MatchMediaService {}
@Injectable({
  providedIn: 'root'
})
export class NzScrollService extends ScrollService {}
