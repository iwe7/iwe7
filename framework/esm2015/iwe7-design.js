import { Directive, Input, ViewContainerRef, TemplateRef, Renderer2, NgModule } from '@angular/core';
import { map } from 'underscore';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { CommonModule } from '@angular/common';
import { Iwe7Base } from 'iwe7-core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * design="name;class 'class';style 'style';drag true; drop true;"
 */

class Iwe7DesignDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} template
     * @param {?} renderer2
     * @param {?} lazyloador
     */
    constructor(_viewContainerRef, template, renderer2, lazyloador) {
        this._viewContainerRef = _viewContainerRef;
        this.template = template;
        this.renderer2 = renderer2;
        this.lazyloador = lazyloador;
        this.designSetting = false;
        this.designDebug = false;
        this.viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.designDebug) {
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('design' in changes) {
            this.createComponent();
        }
    }
    /**
     * @return {?}
     */
    createComponent() {
        this.viewContainerRef.clear();
        let /** @type {?} */ name = this.design.name || null;
        this.lazyloador.createComponent(name, this._viewContainerRef).subscribe(res => { });
    }
    /**
     * @param {?} ele
     * @return {?}
     */
    setStyle(ele) {
        map(this.design.style, (s, key) => {
            this.renderer2.setStyle(ele, '' + key, s);
        });
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    setDrag(instance) {
        let /** @type {?} */ ele = instance.ele.nativeElement;
        this.etAttribute({
            draggable: true
        }, ele);
        let /** @type {?} */ uuid;
        fromEvent(ele, 'dragstart').subscribe((ev) => {
            uuid = instance.id;
            ev.dataTransfer.setData('name', 'guid_' + instance.guid);
            ev.stopPropagation();
        });
        fromEvent(ele, 'dragend').subscribe((ev) => {
            // dragend 删除这一个
            // this.history.removeComponentByUuid(uuid);
            console.log(ele);
        });
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    setDrop(instance) {
        const /** @type {?} */ ele = instance.ele.nativeElement;
        fromEvent(ele, 'drop').subscribe((ev) => { });
    }
    /**
     * @param {?} classObj
     * @param {?=} ele
     * @return {?}
     */
    etAttribute(classObj, ele) {
        if (!ele) {
            return '';
        }
        for (const /** @type {?} */ key in classObj) {
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
    }
}
Iwe7DesignDirective.decorators = [
    { type: Directive, args: [{
                selector: '[iwe7Design],[design],[designClass],[designStyle],[designDrag],[designDrop],[designInstance]'
            },] },
];
/** @nocollapse */
Iwe7DesignDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: TemplateRef, },
    { type: Renderer2, },
    { type: LazyLoaderService, },
];
Iwe7DesignDirective.propDecorators = {
    "design": [{ type: Input },],
    "designClass": [{ type: Input },],
    "designStyle": [{ type: Input },],
    "designDrag": [{ type: Input },],
    "designDrop": [{ type: Input },],
    "designSetting": [{ type: Input },],
    "designDebug": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Iwe7DesignModule {
}
Iwe7DesignModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [Iwe7DesignDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class Iwe7DesignBase extends Iwe7Base {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        super(cd);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { Iwe7DesignModule, Iwe7DesignBase, Iwe7DesignDirective as ɵa };
//# sourceMappingURL=iwe7-design.js.map
