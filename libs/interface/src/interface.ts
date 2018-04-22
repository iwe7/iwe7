// 设计器机构

export interface DesignFactoryOption {
  title: string;
  label: string;
}

export interface DesignFactoryInterface {
  // 表单名
  name: string;
  // 表单标题
  label: string;
  // 提示输入
  placeholder: string;
  // 表单选项
  options?: DesignFactoryOption[];
  // 默认值
  value: string;
}

export interface DesignForm {}

// 元素数据库表单
export interface ElementTable {
  // 选择器
  selector: string;
  // 作者
  author: string;
  // 标题
  title: string;
  // 简介
  desc: string;
  // 创建时间
  create_time?: number;
  // 价格
  price: number;
  // 需要支付
  needpay?: boolean;
  // 版本号
  version: string;
  type: string;
  // 用于查找本元素下可用元素
  father?: string;
  // 唯一代码 author+selector
  code: string;
  // 内容
  setting: Element;
}

export interface ElementInputsOption {}

// 输入配置项目
export interface ElementInputs {
  // 元素样式
  styles?: { [key: string]: string };
  // 元素样式类
  classes?: { [key: string]: boolean };
  // 元素主题
  theme?: string;
  // 其他配置项目
  [key: string]: any;
}

// 输出事件类型
export type ElementOutputsType =
  | 'change$'
  | 'click$'
  | 'submit$'
  | 'location$'
  | 'classes$'
  | 'styles$'
  | 'drag$'
  | 'drop$';

// 输出配置项目
export interface ElementOutputs {
  [key: string]: ElementOutputsType;
}

// 元素
export interface Element {
  // 选择器
  selector: string;
  // 输入选项
  inputs?: ElementInputs;
  // 输出选项
  outputs?: ElementOutputs;
  // 内容
  children?: {
    [key: string]: Element | Element[];
  };
}
