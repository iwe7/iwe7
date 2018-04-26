// 字段类型
export type TableFieldType =
  | 'tinyint'
  | 'int'
  | 'bigint'
  | 'decimal'
  | 'varchar'
  | 'text'
  | 'mediumtext';

export type TableFieldFormType =
  | 'number'
  | 'mobile'
  | 'email'
  | 'money'
  | 'realname'
  | 'image'
  | 'thumbs'
  | 'boolean'
  | 'select'
  | 'textarea'
  | 'icon'
  | 'link'
  | 'radio'
  | 'switch'
  | 'address'
  | 'city'
  | 'date'
  | 'date-time'
  | 'date-range'
  | 'data-time-range'
  | 'time'
  | 'time-range'
  | 'mediumtext';

export type TableFieldShowType =
  | 'label'
  | 'input'
  | 'tag'
  | 'image'
  | 'video';

export interface TableFieldValidator {
  type: TableFieldValidatorType;
  limit: string;
  msg: string;
}

export type TableFieldValidatorType =
  | 'required'
  | 'maxLength'
  | 'minLength'
  | 'email'
  | 'mobile'
  | 'code';

// 数据表结构
export interface TableField {
  name: string;
  type: TableFieldType;
  length: number;
  null: boolean;
  ai: boolean;
  default: any;
  isForm: boolean;
  formType: TableFieldFormType;
  placeholder: string;
  validators: TableFieldValidator[];
  isShow: boolean;
  showType: TableFieldShowType;
  isSort: boolean;
  isFilter: boolean;
  isExport: boolean;
}

export type TableIndexType = 'PRIMARY' | 'UNIQUE' | 'INDEX' | 'FULLTEXT';

// 索引列
export interface TableIndexRow {
  // 字段名称
  name: string;
  // 字段长度
  lenght: number;
}
// 索引
export interface TableIndex {
  // 索引类型
  type: TableIndexType;
  // 列
  rows: TableIndexRow[];
  name: string;
}

// 外键
export interface TableForeign {
  // 源
  from: string;
  // 目标表
  toTable: string;
  // 目标字段
  to: string;
}
// 数据表
export interface Table {
  name: string;
  title: string;
  desc: string;
  fields: TableField[];
  indexs: TableIndex[];
  foreigns: TableForeign[];
}
