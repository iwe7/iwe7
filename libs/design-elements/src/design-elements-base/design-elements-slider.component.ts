import {
  DesignElementsBase,
  DesignElementsBaseProps
} from './design-elements-base.component';
// 滑动切换
export interface DesignElementsSliderProps extends DesignElementsBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignElementsSlider<
  T extends DesignElementsSliderProps
> extends DesignElementsBase<T> {}
