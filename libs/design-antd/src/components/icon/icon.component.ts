import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewEncapsulation,
  AfterViewInit,
  HostBinding,
  ElementRef,
  Renderer2
} from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';
@Component({
  selector: 'i.anticon',
  templateUrl: './icon.component.html',
  styleUrls: ['../style/core/iconfont.less'],
  encapsulation: ViewEncapsulation.None
})
export class IconComponent extends Iwe7DesignBase<any>
  implements OnInit, AfterViewInit {
  constructor(
    cd: ChangeDetectorRef,
    public ele: ElementRef,
    public render: Renderer2
  ) {
    super(cd);
  }

  ngAfterViewInit() {
    this.props.subscribe(res => {
      let { name } = res;
      if (name) {
        this.render.addClass(this.ele.nativeElement, 'anticon-' + name);
      }
    });
  }
  onPropsChange(res: any) {}
}
