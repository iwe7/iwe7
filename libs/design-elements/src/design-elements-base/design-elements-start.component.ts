import {
  DesignElementsBase,
  DesignElementsBaseProps
} from './design-elements-base.component';
// 滑动切换
export interface DesignElementsStartProps extends DesignElementsBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignElementsSlider<
  T extends DesignElementsStartProps
> extends DesignElementsBase<T> {}
