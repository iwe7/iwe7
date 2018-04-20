import { ViewContainerRef, Injector, HostBinding } from '@angular/core';

export class Core {
  // 元素id
  id: string;
  @HostBinding('style.display') display: string = 'flex';
  @HostBinding('style.height') height: string = '100%';
  @HostBinding('style.width') width: string = '100%';
  @HostBinding('style.align-items') alignItems: string = 'flex-start';
  @HostBinding('style.align-flow') alignFlow: string = 'column nowrap';
  @HostBinding('style.place-content') placeContent: string = 'flex-start';

  // 右键复制/剪切/粘贴元素
  // - 所有数据
  data: any;
  // - 输入数据
  inputs: any;
  // - 输出数据
  outputs: any;
  // - 个性样式
  styles: any;

  constructor(public view: ViewContainerRef, public injector: Injector) {}
}
