import { Injectable, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BehaviorSubject, from, of, Subject } from 'rxjs';
import { tap, map, filter, flatMap, takeLast } from 'rxjs/operators';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { DesignAndPreviewProps } from './settings/types';
export const designAndPreviewPropsData: Map<
  string,
  DesignAndPreviewProps[]
> = new Map();
import nzRate from './settings/nz-rate';
import nzSwitch from './settings/nz-switch';
import nzLayout from './settings/nz-layout';

designAndPreviewPropsData.set('nz-rate', nzRate);
designAndPreviewPropsData.set('nz-switch', nzSwitch);
designAndPreviewPropsData.set('nz-layout', nzLayout);

@Injectable({
  providedIn: 'root'
})
export class DesignAndPreviewService {
  form: FormGroup;
  // 表单流
  form$: BehaviorSubject<any> = new BehaviorSubject({});
  // 展示流
  preview$: BehaviorSubject<any> = new BehaviorSubject({});
  list: DesignAndPreviewProps[] = [];
  name: string;

  formLabelSpan: number = 6;
  constructor(public fb: FormBuilder, public load: LazyLoaderService) {
    this.form = this.fb.group({});
  }
  // 初始化系统
  init(name: string) {
    this.name = name;
    this.list = designAndPreviewPropsData.get(name) || [];
    this.createForm();
  }
  // 更新表单
  updateForm(key, value) {
    if (this.form.contains(key)) {
      this.form.get(key).setValue(value);
    } else {
      this.form.addControl(key, this.fb.control(value));
    }
  }
  // 更新试图
  updateView() {
    let viewData = {
      selector: this.name,
      props: [],
      ...this.form.value
    };
    console.log(viewData);
    this.preview$.next(viewData);
  }
  // 处理number类型表单
  handleNumber(res: DesignAndPreviewProps) {
    let _min, _max;
    let { name, value, rules, step } = res;
    if (rules) {
      let { min, max } = rules;
      _min = min;
      _max = max;
    }
    return {
      selector: 'nz-input-number',
      displayValue: value,
      nzMin: _min || 0,
      nzMax: _max || 100,
      nzStep: step || 1,
      props: [],
      callback: evt => {
        // 关联变化
        let { data } = evt;
        this.updateForm(name, data);
        // update Rate
        this.updateView();
      }
    };
  }
  // 处理boolean类型表单
  handleBoolean(res: DesignAndPreviewProps) {
    let { value, name } = res;
    return {
      selector: 'nz-switch',
      props: [],
      displayValue: value,
      callback: evt => {
        let { data } = evt;
        this.updateForm(name, data);
        // update Rate
        this.updateView();
      }
    };
  }

  handelSelect(res) {
    let { placeholder, options, value, name } = res;
    let opts: any[] = [];
    if (options) {
      options.map(res => {
        opts.push({
          label: res,
          value: res,
          disabled: false
        });
      });
    }
    return {
      selector: 'nz-select',
      nzNotFoundContent: '暂无内容',
      nzDropdownStyle: {
        width: '120px'
      },
      nzPlaceHolder: placeholder,
      options: opts,
      value: value,
      callback: evt => {
        let { data } = evt;
        this.updateForm(name, data);
        // update Rate
        this.updateView();
      }
    };
  }

  handleColor(res) {
    return {
      selector: 'nz-colors',
      props: []
    };
  }

  handleFormItem(res) {
    let { label } = res;
    return {
      selector: 'nz-form-label',
      nzSpan: this.formLabelSpan,
      text: label,
      props: []
    };
  }

  // 创建表单
  createForm() {
    let props2 = {
      selector: 'nz-form',
      nzLayout: 'horizontal',
      props: []
    };
    from(this.list)
      .pipe(
        // 大小写转换
        map(res => {
          res.type = res.type.toLowerCase();
          return res;
        }),
        map(res => {
          let { type, label, value, name } = res;
          this.updateForm(name, value);
          // 创建一个项目
          let item = {
            selector: 'nz-form-item',
            props: []
          };
          if (label) {
            item.props.push(this.handleFormItem(res));
          }
          // 创建表单控件
          let item2 = {
            selector: 'nz-form-control',
            nzSpan: 24 - this.formLabelSpan,
            props: []
          };
          // 创建 number 类型
          if (type === 'number') {
            item2.props.push(this.handleNumber(res));
          }
          // boolean 类型
          if (type === 'boolean') {
            item2.props.push(this.handleBoolean(res));
          }
          // 选择
          if (type === 'select') {
            item2.props.push(this.handelSelect(res));
          }
          // 颜色
          if (type === 'color') {
            item2.props.push(this.handleColor(res));
          }
          item.props.push(item2);
          props2.props.push(item);
          return props2;
        }),
        // result
        takeLast(1),
        tap(res => console.log(res))
      )
      .subscribe(res => {
        this.form$.next(res);
      });
  }
  // 保存数据
  saveData() {}
  // 设置展示位
  setViewRef(e: ViewContainerRef) {
    this.updateView();
    this.load
      .load(this.name, e, this.preview$, evt => {
        let { type, data } = evt;
        if (type === 'change') {
          console.log('数据更新了', data);
        }
      })
      .subscribe();
  }
  // 设置表单位置
  setFormRef(e: ViewContainerRef) {
    this.load
      .load('nz-form', e, this.form$, (evt: any) => {
        console.log(evt);
      })
      .subscribe();
  }
}
