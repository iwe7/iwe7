import { Component } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'iwe7-input-number',
  templateUrl: './input-number.html',
  styleUrls: ['./input-number.scss']
})
export class Iwe7InputNumberComponent {
  nzSize: any = {
    type: 'select',
    value: 'default',
    title: '尺寸',
    options: [
      {
        title: '默认大小',
        value: 'default'
      },
      {
        title: '大尺寸',
        value: 'large'
      },
      {
        title: '小尺寸',
        value: 'small'
      }
    ]
  };

  nzMin: any = {
    type: 'number',
    value: 0,
    title: '最小值'
  };

  nzMax: any = {
    type: 'number',
    value: 100,
    title: '最大值'
  };

  nzFormatter: any = {
    type: 'string',
    value: '${value}%',
    title: '格式化'
  };

  nzParser: any = {
    type: 'string',
    value: '%',
    title: '解析'
  };

  nzPrecision: any = {
    type: 'number',
    value: 10,
    title: ''
  };

  nzAutoFocus: any = {
    type: 'boolean',
    value: false,
    title: '自动获焦'
  };

  nzDisabled: any = {
    type: 'boolean',
    value: false,
    title: '禁用开关'
  };

  nzStep: any = {
    type: 'number',
    value: 1,
    title: '步长'
  };

  value: any = {
    type: 'string',
    value: 0,
    title: '默认值'
  };

  change$: Subject<number> = new Subject();

  _nzFormatter = value => {
    let str = this.nzFormatter.value.replace('${value}', value);
    return str;
  };

  _nzParser = value => {
    let str = value.replace(this.nzParser.value, '');
    return str;
  };

  numberChange(e) {
    this.change$.next(this.value.value);
  }
}
