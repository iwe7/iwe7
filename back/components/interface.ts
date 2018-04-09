import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ElementRef,
  Renderer2
} from "@angular/core";
import * as _ from "underscore";

export class Iwe7DesignBase {
  @Input() props: any;
  constructor(public ele: ElementRef, public render: Renderer2) {}
  public setClass() {
    let ele = this.ele.nativeElement;
    if (this.props && this.props.class) {
      _.map(this.props.class, (s, key) => {
        if (this.isTrue(s)) {
          this.render.addClass(ele, "" + key);
        } else {
          this.render.removeClass(ele, "" + key);
        }
      });
    }
  }

  public isTrue(val: any) {
    if (typeof val === "string") {
      val = val.toLowerCase().trim();
      return val === "true" || val === "on" || val === "";
    }
    return !!val;
  }
}

export class Iwe7DesignComponent extends Iwe7DesignBase {
  @HostBinding("attr.id") _id: string;
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }
  // 更新数据
  update() {}
}

export class Iwe7DesignSettingComponent extends Iwe7DesignBase {
  instance: any;
  constructor(public ele: ElementRef, public render: Renderer2) {
    super(ele, render);
  }
}

export interface Iwe7Design {
  title: string;
  name: string;
  show: true;
  setting: any;
  preview: any;
  props: {
    name: string;
    style: any;
    class: any;
  };
}

export interface Iwe7DesignConfig {
  [key: string]: Iwe7Design;
}
