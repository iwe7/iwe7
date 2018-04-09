import {
  Component,
  OnInit,
  ElementRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild
} from '@angular/core';
import { IcssService, IcssInterface } from 'iwe7/icss';
import { Subject } from 'rxjs/Subject';
import { BaseTestComponent } from 'iwe7/core/src/base-test/base-test.component';
import { startWith } from 'rxjs/operators';
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

  // cube颜色控制器
  cubeColorCtrl$: Subject<{ color: string; bg: string }> = new Subject();
  @ViewChild('cube') cube: ElementRef;
  constructor(
    public icss: IcssService,
    public ele: ElementRef,
    public view: ViewContainerRef
  ) {}

  randomHexColor(): string {
    return `#${(
      '00000' + ((Math.random() * 0x1000000) << 0).toString(16)
    ).substr(-6)}`;
  }
  ngOnInit() {
    this.icss.init(
      {
        cube: this.cubeColorCtrl$
      },
      this.cube
    );
    setInterval(() => {
      this.cubeColorCtrl$.next({
        color: '#fff',
        bg: this.randomHexColor()
      });
    },100);
    let i = 0;
    setInterval(() => {
      this.sub2$.next({
        a: i++,
        b: i++,
        c: i++
      });
    }, 1000);
  }
  click(e) {
    this.disabled = !this.disabled;
  }
}
