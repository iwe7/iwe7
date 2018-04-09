import { TextareaComponent } from "./textarea/textarea.component";
import { TextareaSettingComponent } from "./textarea-setting/textarea-setting.component";

export const component = {
  title: "多行输入框",
  name: "textarea",
  show: false,
  setting: TextareaSettingComponent,
  preview: TextareaComponent,
  props: {
    name: "textarea",
    placeholder: "请输入文本",
    disabled: false,
    class: {
      [`iwe7-design-input`]: true
    },
    style: {
      display: 'block'
    },
    props: []
  }
};
