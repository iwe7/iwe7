import { DesignBase, DesignBaseProps } from './design-base';
// 音频组件
export interface DesignLayoutProps extends DesignBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignImage<
  T extends DesignLayoutProps
> extends DesignBase<T> {}
