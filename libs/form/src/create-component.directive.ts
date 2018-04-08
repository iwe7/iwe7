import {
  Directive,
  Input,
  ViewContainerRef,
  OnInit,
  ComponentFactoryResolver,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FieldRegisterService } from 'iwe7/form/src/field-register.service';

@Directive({
  selector: '[createComponent],[createComponentProps]'
})
export class CreateComponentDirective
  implements OnInit, AfterViewInit, OnChanges {
  @Input() createComponent: string;
  // 输入即传入进来的json
  @Input() createComponentProps: any;
  @Input() createComponentId: any;

  componentInstance: any;
  constructor(
    public register: FieldRegisterService,
    public view: ViewContainerRef
  ) {}

  ngOnInit() {}
  // 当输入变化时，重新生成组件
  ngOnChanges(changes: SimpleChanges) {
    if ('createComponent' in changes) {
      this.create();
    }
    if ('createComponentProps' in changes) {
      this.setProps();
    }
    if ('createComponentId' in changes) {
      this.setProps();
    }
  }

  setProps() {
    if (!!this.componentInstance) {
      this.componentInstance.props = this.createComponentProps;
      this.componentInstance.updateValue();
    }
  }

  create() {
    // 清理试图
    this.view.clear();
    // 创建并插入component
    const component = this.register.getComponent(this.createComponent);
    const elInjector = this.view.parentInjector;
    const componentFactoryResolver = elInjector.get(ComponentFactoryResolver);
    const componentFactory = componentFactoryResolver.resolveComponentFactory(
      component
    );
    const componentRef = this.view.createComponent(componentFactory);
    // 保存一下，方便后面使用
    this.componentInstance = componentRef.instance;
    this.setProps();
  }

  ngAfterViewInit() {}
}
