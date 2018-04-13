import {
  DesignBase,
  DesignBaseProps
} from './design-base';
// 表格组件
export interface DesignTabsProps extends DesignBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignMap<
  T extends DesignTabsProps
> extends DesignBase<T> {}
