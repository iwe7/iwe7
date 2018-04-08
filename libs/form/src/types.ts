import { Input } from '@angular/core';
// 组件设置规范
export abstract class FieldBase {
  // 传进来的json数据
  @Input() props: { [key: string]: string };
  // 更新属性的值
  abstract updateValue(): void;
}
// json数据格式规范
export interface SchemaInterface {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  validators: {
    [key: string]: {
      limit: string;
      msg: string;
    };
  };
}
// 表单规范
export interface SchemasInterface {
  // 提交的url
  url?: string;
  // 提交成功
  success: {
    // 提交成功提醒
    msg?: string;
    // 提交成功跳转
    url?: string;
  };
  // 提交失败
  fail: {
    // 提交失败提醒
    msg?: string;
    url?: string;
  };
  // 表单设置
  fields: SchemaInterface[];
}
