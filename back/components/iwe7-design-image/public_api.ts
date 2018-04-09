import { ImageComponent } from "./image/image.component";
import { ImageSettingComponent } from "./image-setting/image-setting.component";

export const component = {
  title: "图片",
  name: "image",
  show: true,
  setting: ImageSettingComponent,
  preview: ImageComponent,
  props: {
    name: "image",
    src: "http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png",
    class: {
      [`iwe7-design-image`]: true
    },
    style: {},
    props: []
  }
};
