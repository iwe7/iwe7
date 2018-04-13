import {
  DesignElementsBase,
  DesignElementsBaseProps
} from './design-elements-base.component';
// 音频组件
export interface DesignElementsAudioProps extends DesignElementsBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignElementsAudio<
  T extends DesignElementsAudioProps
> extends DesignElementsBase<T> {}
