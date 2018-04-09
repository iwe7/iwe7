import { ButtonComponent } from "./button/button.component";
import { ButtonSettingComponent } from "./button-setting/button-setting.component";

export const component = {
  title: "按钮",
  name: "button",
  show: false,
  setting: ButtonSettingComponent,
  preview: ButtonComponent,
  props: {
    decode: true,
    name: 'button',
    text: "我是按钮",
    class: {
      [`iwe7-design-button`]: true,
      [`weui-btn`]: true,
      [`weui-btn_primary`]: true,
      [`weui-btn_mini`]: false
    },
    style: {},
    props: []
  }
};
