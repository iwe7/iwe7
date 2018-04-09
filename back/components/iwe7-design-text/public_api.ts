import { TextComponent } from "./text/text.component";
import { TextSettingComponent } from "./text-setting/text-setting.component";

export const component = {
  title: "文本",
  name: "text",
  show: true,
  setting: TextSettingComponent,
  preview: TextComponent,
  props: {
    decode: true,
    name: 'text',
    text: "测试label",
    class: {
      [`iwe7-design-text`]: true
    },
    style: {
      display: "block"
    },
    props: []
  }
};
