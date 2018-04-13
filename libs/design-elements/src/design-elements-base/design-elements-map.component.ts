import {
  DesignElementsBase,
  DesignElementsBaseProps
} from './design-elements-base.component';
// 地图组件
export interface DesignElementsMapProps extends DesignElementsBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignElementsMap<
  T extends DesignElementsMapProps
> extends DesignElementsBase<T> {}
