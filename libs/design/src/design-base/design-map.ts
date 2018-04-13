import {
  DesignBase,
  DesignBaseProps
} from './design-base';
// 地图组件
export interface DesignMapProps extends DesignBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignMap<
  T extends DesignMapProps
> extends DesignBase<T> {}
