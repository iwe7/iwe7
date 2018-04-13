import {
  DesignElementsBase,
  DesignElementsBaseProps
} from './design-elements-base.component';
// 音频组件
export interface DesignElementsImageProps extends DesignElementsBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignElementsImage<
  T extends DesignElementsImageProps
> extends DesignElementsBase<T> {}
