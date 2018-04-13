import {
  DesignBase,
  DesignBaseProps
} from './design-base';
// 音频组件
export interface DesignAudioProps extends DesignBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignAudio<
  T extends DesignAudioProps
> extends DesignBase<T> {}
