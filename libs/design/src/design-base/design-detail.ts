import {
  DesignBase,
  DesignBaseProps
} from './design-base';
// 详情组件
export interface DesignDetailProps extends DesignBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignAudio<
  T extends DesignDetailProps
> extends DesignBase<T> {}
