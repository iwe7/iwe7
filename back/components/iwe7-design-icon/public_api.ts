import { IconComponent } from "./icon/icon.component";
import { IconSettingComponent } from "./icon-setting/icon-setting.component";

export const component = {
  title: "图标",
  name: "icon",
  show: true,
  setting: IconSettingComponent,
  preview: IconComponent,
  props: {
    name: "icon",
    icon: "ion ion-home",
    class: {
      [`iwe7-design-icon`]: true
    },
    style: {
      display: 'inline-block'
    },
    props: []
  }
};
