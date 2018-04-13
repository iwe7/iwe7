import {
  DesignBase,
  DesignBaseProps
} from './design-base';
// 滑动切换
export interface DesignStartProps extends DesignBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignSlider<
  T extends DesignStartProps
> extends DesignBase<T> {}
