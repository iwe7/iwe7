// 输入配置项目
export interface AppInputs {
  // 元素样式
  styles?: { [key: string]: string };
  // 元素样式类
  classes?: { [key: string]: boolean };
  // 元素主题
  theme?: string;
  // 其他配置项目
  [key: string]: any;
}

export class AppModel {
  inputs: AppInputs = {};
  outputs: any = [];
  children: any = {};
  selector: string = 'base-view';
  constructor() {}
}

export const initialApp: AppModel = {
  selector: 'base-view',
  inputs: {
    display: 'inline-block',
    ['transform-origin']: '0% 0% 0px'
  },
  outputs: ['change$'],
  children: {}
};
