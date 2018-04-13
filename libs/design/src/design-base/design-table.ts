import {
  DesignBase,
  DesignBaseProps
} from './design-base';
// 表格组件
export interface DesignTableProps extends DesignBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignMap<
  T extends DesignTableProps
> extends DesignBase<T> {}
