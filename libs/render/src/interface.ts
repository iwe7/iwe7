// 结构
export interface KeyValue {
  [index: string]: any;
}
// 插座名 视图参数
export interface RenderChildren {
  [index: string]: RenderOptions[];
}
// 事件名 action
export interface RenderOutput {
  [index: string]: string;
}

export type RenderTypes =
  | 'all'
  | 'pc'
  | 'mobile'
  | 'wechat'
  | 'android'
  | 'ios'
  | 'wxapp';

export interface RenderOptions {
  // 选择器
  selector?: string;
  // 配置项目
  inputs?: KeyValue;
  // 输出项目
  outputs?: RenderOutput;
  // 插座
  outlet?: string;
  // 上级id 0表示最顶级
  fid?: any;
  // id
  $loki?: any;
  // 名称
  title?: string;
  // 类型
  type?: RenderTypes[];
  // page element app
  element_Type?: string;
  // 唯一code
  code?: string;
  // 角色权限
  role?: string[];
  // 作者
  author?: string[];
  // 默认页面
  isDefault?: boolean;
  links?: string[];
}

export interface RenderLink {
  link: RenderSwiper;
  title: string;
}
export interface RenderSwiper {}

export interface RenderShare {
  title?: string;
  icon?: string;
  desc?: string;
  link?: string;
}

export interface RenderElement {
  selector: string;
  inputs: KeyValue;
  outputs: RenderOutput;
  fid: any;
}

export interface RenderAppPage {
  // 名称
  title: string;
  share?: RenderShare;
  // 应用ID
  appId: any;
  // 页面元素
  elements?: any[];
  // 唯一标识
  code: string;
  // 是否默认
  isDefault?: boolean;
}

export interface RenderApp {
  $loki?: any;
  // 唯一标识
  code: string;
  // 标题
  title?: string;
  // 简介
  desc?: string;
  // 路由
  links?: RenderLink[];
  // 作者
  author?: string;
  // 图标
  icon?: string;
  // 预览
  swipers?: RenderSwiper[];
  // 页面
  pages?: RenderAppPage[];
  // 应用类型
  appType?: string;
  appFrom?: string;
}
