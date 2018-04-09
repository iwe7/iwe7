import {
  Component,
  OnInit,
  ElementRef,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { IcssService, IcssInterface } from 'iwe7/icss';
import { Subject } from 'rxjs/Subject';
import { BaseTestComponent } from 'iwe7/core/src/base-test/base-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  disabled: boolean = true;
  sub: Subject<any> = new Subject();
  color: string = 'primary';

  list: any[] = [
    {
      type: 'input',
      name: 'realname',
      label: '姓名',
      placeholder: '请输入姓名',
      value: '',
      id: '1',
      validators: {
        required: {
          limit: true,
          msg: '请输入您的姓名'
        },
        minLength: {
          limit: 3,
          msg: '最小长度为3'
        },
        maxLength: {
          limit: 10,
          msg: '最大长度为10'
        }
      }
    },
    {
      type: 'input',
      name: 'nickname',
      label: '昵称',
      placeholder: '请输入昵称',
      value: '',
      id: '2',
      validators: {
        required: {
          limit: true,
          msg: '请输入您的昵称'
        },
        minLength: {
          limit: 3,
          msg: '昵称最小长度为3'
        },
        maxLength: {
          limit: 10,
          msg: '昵称最大长度为10'
        }
      }
    }
  ];

  sub2$: Subject<any> = new Subject();
  sub2: any;
  constructor(
    public icss: IcssService,
    public ele: ElementRef,
    public view: ViewContainerRef
  ) {}
  ngOnInit() {
    const pinjector = this.view.parentInjector;

    const elInjector = this.view.parentInjector;
    const componentFactoryResolver = elInjector.get(ComponentFactoryResolver);
    const componentFactory = componentFactoryResolver.resolveComponentFactory(
      BaseTestComponent
    );
    const componentRef = this.view.createComponent(componentFactory);
    // 保存一下，方便后面使用
    const componentInstance = componentRef.instance as any;
    componentInstance.props = { a: 1, b: 2, c: 3 };
  }
  click(e) {
    this.disabled = !this.disabled;
  }
}
