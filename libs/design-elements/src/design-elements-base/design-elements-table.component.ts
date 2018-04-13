import {
  DesignElementsBase,
  DesignElementsBaseProps
} from './design-elements-base.component';
// 表格组件
export interface DesignElementsTableProps extends DesignElementsBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignElementsMap<
  T extends DesignElementsTableProps
> extends DesignElementsBase<T> {}
