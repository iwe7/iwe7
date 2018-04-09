import { VideoComponent } from "./video/video.component";
import { VideoSettingComponent } from "./video-setting/video-setting.component";

export const component = {
  title: "视频",
  name: "video",
  show: true,
  setting: VideoSettingComponent,
  preview: VideoComponent,
  props: {
    name: "video",
    src: "http://jq22com.qiniudn.com/jq22-sp.mp4",
    class: {
      [`iwe7-design-video`]: true
    },
    style: {
      display: 'block'
    },
    props: []
  }
};
