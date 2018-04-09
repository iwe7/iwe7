import { AudioComponent } from "./audio/audio.component";
import { AudioSettingComponent } from "./audio-setting/audio-setting.component";

export const component = {
  title: "音频",
  name: "audio",
  show: true,
  setting: AudioSettingComponent,
  preview: AudioComponent,
  props: {
    name: "audio",
    src: "",
    class: {
      [`iwe7-design-audio`]: true
    },
    style: {
      display: 'block'
    },
    props: []
  }
};
