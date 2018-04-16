/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export { Iwe7CoreModule } from './src/core.module';
export { Iwe7Base } from './src/base-component';
export { GetViewRefDirective } from './src/get-view-ref.directive';
export { LoggerService, IWE7_LOGGER_SHOW } from './src/logger.service';
export { UuidService } from './src/uuid.service';
export { ScrollService } from './src/scroll.service';
export { HostClassService } from './src/host-class.service';
export { MatchMediaService } from './src/match-media.service';
/**
 * @record
 */
export function KeyValue() { }
function KeyValue_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [key: string]: any;
    */
}
/**
 * @record
 */
export function SchemaFormItem() { }
function SchemaFormItem_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SchemaFormItem.prototype.name;
    /** @type {?|undefined} */
    SchemaFormItem.prototype.type;
    /** @type {?|undefined} */
    SchemaFormItem.prototype.label;
    /** @type {?|undefined} */
    SchemaFormItem.prototype.placeholder;
    /** @type {?|undefined} */
    SchemaFormItem.prototype.value;
    /** @type {?|undefined} */
    SchemaFormItem.prototype.validators;
}
//
export { POSITION_MAP, DEFAULT_4_POSITIONS, DEFAULT_DROPDOWN_POSITIONS, DEFAULT_DATEPICKER_POSITIONS, DEFAULT_MENTION_POSITIONS } from './src/overlay-position-map';
export { matchMedia } from './src/functions/match-media';
export { reqAnimFrame, cancelRequestAnimationFrame } from './src/functions/request-animation';
export { trimWhiteSpace } from './src/functions/trim-whitespace';
import { HostClassService } from './src/host-class.service';
import { ScrollService } from './src/scroll.service';
import { Injectable } from '@angular/core';
import { MatchMediaService } from './src/match-media.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NzUpdateHostClassService extends HostClassService {
}
NzUpdateHostClassService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ NzUpdateHostClassService.ngInjectableDef = i0.defineInjectable({ factory: function NzUpdateHostClassService_Factory() { return new NzUpdateHostClassService(i0.inject(i0.INJECTOR)); }, token: NzUpdateHostClassService, providedIn: "root" });
function NzUpdateHostClassService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NzUpdateHostClassService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NzUpdateHostClassService.ctorParameters;
}
export class NzMatchMediaService extends MatchMediaService {
}
NzMatchMediaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ NzMatchMediaService.ngInjectableDef = i0.defineInjectable({ factory: function NzMatchMediaService_Factory() { return new NzMatchMediaService(); }, token: NzMatchMediaService, providedIn: "root" });
function NzMatchMediaService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NzMatchMediaService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NzMatchMediaService.ctorParameters;
}
export class NzScrollService extends ScrollService {
}
NzScrollService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ NzScrollService.ngInjectableDef = i0.defineInjectable({ factory: function NzScrollService_Factory() { return new NzScrollService(i0.inject(i1.DOCUMENT)); }, token: NzScrollService, providedIn: "root" });
function NzScrollService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NzScrollService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NzScrollService.ctorParameters;
}
//# sourceMappingURL=index.js.map