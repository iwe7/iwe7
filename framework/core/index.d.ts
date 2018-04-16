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
export * from './src/overlay-position-map';
export { matchMedia } from './src/functions/match-media';
export { reqAnimFrame, cancelRequestAnimationFrame } from './src/functions/request-animation';
export { trimWhiteSpace } from './src/functions/trim-whitespace';
import { HostClassService } from './src/host-class.service';
import { ScrollService } from './src/scroll.service';
import { MatchMediaService } from './src/match-media.service';
export declare class NzUpdateHostClassService extends HostClassService {
}
export declare class NzMatchMediaService extends MatchMediaService {
}
export declare class NzScrollService extends ScrollService {
}
