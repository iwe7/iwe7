(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('underscore'), require('rxjs/observable/fromEvent'), require('iwe7/lazy-load'), require('@angular/common'), require('iwe7-core')) :
	typeof define === 'function' && define.amd ? define('iwe7/design', ['exports', '@angular/core', 'underscore', 'rxjs/observable/fromEvent', 'iwe7/lazy-load', '@angular/common', 'iwe7-core'], factory) :
	(factory((global.iwe7 = global.iwe7 || {}, global.iwe7.design = {}),global.ng.core,global.underscore,global.Rx.Observable,global.iwe7['lazy-load'],global.ng.common,global.iwe7Core));
}(this, (function (exports,core,underscore,fromEvent,lazyLoad,common,iwe7Core) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Iwe7DesignDirective = /** @class */ (function () {
    function Iwe7DesignDirective(_viewContainerRef, template, renderer2, lazyloador) {
        this._viewContainerRef = _viewContainerRef;
        this.template = template;
        this.renderer2 = renderer2;
        this.lazyloador = lazyloador;
        this.designSetting = false;
        this.designDebug = false;
        this.viewContainerRef = _viewContainerRef;
    }
    Iwe7DesignDirective.prototype.ngOnInit = function () {
        if (this.designDebug) {
        }
    };
    Iwe7DesignDirective.prototype.ngOnChanges = function (changes) {
        if ('design' in changes) {
            this.createComponent();
        }
    };
    Iwe7DesignDirective.prototype.createComponent = function () {
        this.viewContainerRef.clear();
        var name = this.design.name || null;
        this.lazyloador.createComponent(name, this._viewContainerRef).subscribe(function (res) { });
    };
    Iwe7DesignDirective.prototype.setStyle = function (ele) {
        var _this = this;
        underscore.map(this.design.style, function (s, key) {
            _this.renderer2.setStyle(ele, '' + key, s);
        });
    };
    Iwe7DesignDirective.prototype.setDrag = function (instance) {
        var ele = instance.ele.nativeElement;
        this.etAttribute({
            draggable: true
        }, ele);
        var uuid;
        fromEvent.fromEvent(ele, 'dragstart').subscribe(function (ev) {
            uuid = instance.id;
            ev.dataTransfer.setData('name', 'guid_' + instance.guid);
            ev.stopPropagation();
        });
        fromEvent.fromEvent(ele, 'dragend').subscribe(function (ev) {
            console.log(ele);
        });
    };
    Iwe7DesignDirective.prototype.setDrop = function (instance) {
        var ele = instance.ele.nativeElement;
        fromEvent.fromEvent(ele, 'drop').subscribe(function (ev) { });
    };
    Iwe7DesignDirective.prototype.etAttribute = function (classObj, ele) {
        if (!ele) {
            return '';
        }
        for (var key in classObj) {
            if (typeof classObj[key] === 'boolean') {
                if (classObj[key]) {
                    this.renderer2.setAttribute(ele, key, 'true');
                }
                else {
                    this.renderer2.removeAttribute(ele, key);
                }
            }
            else {
                this.renderer2.setAttribute(ele, key, classObj[key]);
            }
        }
    };
    return Iwe7DesignDirective;
}());
Iwe7DesignDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[iwe7Design],[design],[designClass],[designStyle],[designDrag],[designDrop],[designInstance]'
            },] },
];
Iwe7DesignDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
    { type: core.TemplateRef, },
    { type: core.Renderer2, },
    { type: lazyLoad.LazyLoaderService, },
]; };
Iwe7DesignDirective.propDecorators = {
    "design": [{ type: core.Input },],
    "designClass": [{ type: core.Input },],
    "designStyle": [{ type: core.Input },],
    "designDrag": [{ type: core.Input },],
    "designDrop": [{ type: core.Input },],
    "designSetting": [{ type: core.Input },],
    "designDebug": [{ type: core.Input },],
};
var Iwe7DesignModule = /** @class */ (function () {
    function Iwe7DesignModule() {
    }
    return Iwe7DesignModule;
}());
Iwe7DesignModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [Iwe7DesignDirective]
            },] },
];
var Iwe7DesignBase = /** @class */ (function (_super) {
    __extends(Iwe7DesignBase, _super);
    function Iwe7DesignBase(cd) {
        return _super.call(this, cd) || this;
    }
    return Iwe7DesignBase;
}(iwe7Core.Iwe7Base));

exports.Iwe7DesignModule = Iwe7DesignModule;
exports.Iwe7DesignBase = Iwe7DesignBase;
exports.ɵa = Iwe7DesignDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=iwe7-design.umd.js.map
