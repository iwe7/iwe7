import { Component, OnInit, ElementRef } from '@angular/core';
import { IcssService, IcssInterface } from 'iwe7/icss';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  disabled: boolean = true;
  sub: Subject<any> = new Subject();
  color: string = 'primary';

  list: any[] = [{
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
    }];
  constructor(public icss: IcssService, public ele: ElementRef) {}
  ngOnInit() {}
  click(e) {
    this.disabled = !this.disabled;
  }
}
