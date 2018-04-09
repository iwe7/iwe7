import { CheckboxGroupComponent } from "./checkbox-group/checkbox-group.component";
import { CheckboxGroupSettingComponent } from "./checkbox-group-setting/checkbox-group-setting.component";

export const component = {
  title: "多项选择器",
  name: "checkbox-group",
  show: false,
  setting: CheckboxGroupSettingComponent,
  preview: CheckboxGroupComponent,
  props: {
    name: "checkbox-group",
    class: {
      [`iwe7-design-checkbox-group`]: true
    },
    style: {},
    props: []
  }
};
