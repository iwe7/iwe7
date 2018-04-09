import { InputComponent } from "./input/input.component";
import { InputSettingComponent } from "./input-setting/input-setting.component";

export const component = {
  title: "输入框",
  name: "input",
  show: false,
  setting: InputSettingComponent,
  preview: InputComponent,
  props: {
    name: "input",
    value: "",
    type: "text",
    password: false,
    placeholder: "请输入文本",
    label: "标题",
    disabled: false,
    class: {
      [`iwe7-design-input`]: true
    },
    style: {
      display: 'block',
      [`background-color`]: '#efefef'
    },
    props: []
  }
};
