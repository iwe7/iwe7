import {
  DesignElementsBase,
  DesignElementsBaseProps
} from './design-elements-base.component';
// 视频组件
export interface DesignElementsVideoProps extends DesignElementsBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignElementsMap<
  T extends DesignElementsVideoProps
> extends DesignElementsBase<T> {}
