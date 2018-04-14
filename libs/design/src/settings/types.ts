import { KeyValue } from 'iwe7/core';

export interface DesignAndPreviewProps extends KeyValue {
  // 字段名 关联表单
  name?: string;
  // 类型
  type?: string;
  // 默认值
  value?: any;
  // 标题
  label?: string;
  // 提示
  placeholder?: string;
  // number->step
  step?: number;
  // select->list
  options?: string[];
  // 表单验证规则
  rules?: {
    [key: string]: {
      limit: string;
      msg: string;
    };
  };
}
