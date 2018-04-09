import { CheckboxComponent } from "./checkbox/checkbox.component";
import { CheckboxSettingComponent } from "./checkbox-setting/checkbox-setting.component";

export const component = {
  title: "多选项目",
  name: "checkbox",
  show: false,
  setting: CheckboxSettingComponent,
  preview: CheckboxComponent,
  props: {
    name: "checkbox",
    code: "xiangmu0",
    value: "0",
    label: "项目0",
    disabled: false,
    checked: false,
    color: '',
    class: {
      [`iwe7-design-checkbox`]: true,
      [`weui-check__label`]: true,
      [`weui-cell`]: true
    },
    style: {},
    props: []
  }
};
