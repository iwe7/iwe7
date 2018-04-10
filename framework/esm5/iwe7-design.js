import { __extends } from 'tslib';
import { Directive, Input, ViewContainerRef, TemplateRef, Renderer2, NgModule } from '@angular/core';
import { map } from 'underscore';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { CommonModule } from '@angular/common';
import { Iwe7Base } from 'iwe7-core';

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
        map(this.design.style, function (s, key) {
            _this.renderer2.setStyle(ele, '' + key, s);
        });
    };
    Iwe7DesignDirective.prototype.setDrag = function (instance) {
        var ele = instance.ele.nativeElement;
        this.etAttribute({
            draggable: true
        }, ele);
        var uuid;
        fromEvent(ele, 'dragstart').subscribe(function (ev) {
            uuid = instance.id;
            ev.dataTransfer.setData('name', 'guid_' + instance.guid);
            ev.stopPropagation();
        });
        fromEvent(ele, 'dragend').subscribe(function (ev) {
            console.log(ele);
        });
    };
    Iwe7DesignDirective.prototype.setDrop = function (instance) {
        var ele = instance.ele.nativeElement;
        fromEvent(ele, 'drop').subscribe(function (ev) { });
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
    { type: Directive, args: [{
                selector: '[iwe7Design],[design],[designClass],[designStyle],[designDrag],[designDrop],[designInstance]'
            },] },
];
Iwe7DesignDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: TemplateRef, },
    { type: Renderer2, },
    { type: LazyLoaderService, },
]; };
Iwe7DesignDirective.propDecorators = {
    "design": [{ type: Input },],
    "designClass": [{ type: Input },],
    "designStyle": [{ type: Input },],
    "designDrag": [{ type: Input },],
    "designDrop": [{ type: Input },],
    "designSetting": [{ type: Input },],
    "designDebug": [{ type: Input },],
};
var Iwe7DesignModule = /** @class */ (function () {
    function Iwe7DesignModule() {
    }
    return Iwe7DesignModule;
}());
Iwe7DesignModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [Iwe7DesignDirective]
            },] },
];
var Iwe7DesignBase = /** @class */ (function (_super) {
    __extends(Iwe7DesignBase, _super);
    function Iwe7DesignBase(cd) {
        return _super.call(this, cd) || this;
    }
    return Iwe7DesignBase;
}(Iwe7Base));

export { Iwe7DesignModule, Iwe7DesignBase, Iwe7DesignDirective as ɵa };
//# sourceMappingURL=iwe7-design.js.map
