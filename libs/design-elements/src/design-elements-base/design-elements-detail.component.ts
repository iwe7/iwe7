import {
  DesignElementsBase,
  DesignElementsBaseProps
} from './design-elements-base.component';
// 详情组件
export interface DesignElementsDetailProps extends DesignElementsBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignElementsAudio<
  T extends DesignElementsDetailProps
> extends DesignElementsBase<T> {}
