import {
  DesignBase,
  DesignBaseProps
} from './design-base';
// 滑动切换
export interface DesignSliderProps extends DesignBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignSlider<
  T extends DesignSliderProps
> extends DesignBase<T> {}
