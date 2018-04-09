import { SwitchComponent } from "./switch/switch.component";
import { SwitchSettingComponent } from "./switch-setting/switch-setting.component";

export const component = {
  title: "开关选择器",
  name: "switch",
  show: false,
  setting: SwitchSettingComponent,
  preview: SwitchComponent,
  props: {
    name: "switch",
    checked: false,
    type: "switch",
    color: "",
    label: "开关选择器",
    class: {
      [`iwe7-design-switch`]: true
    },
    style: {},
    props: []
  }
};
