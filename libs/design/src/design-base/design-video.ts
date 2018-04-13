import {
  DesignBase,
  DesignBaseProps
} from './design-base';
// 视频组件
export interface DesignVideoProps extends DesignBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignMap<
  T extends DesignVideoProps
> extends DesignBase<T> {}
