import { MovableViewComponent } from "./movable-view/movable-view.component";
import { MovableViewSettingComponent } from "./movable-view-setting/movable-view-setting.component";

export const component = {
  title: "可移动区域",
  name: "movable-view",
  show: true,
  setting: MovableViewSettingComponent,
  preview: MovableViewComponent,
  props: {
    name: "movable-view",
    class: {
      [`iwe7-design-movable-view`]: true
    },
    style: {
      display: "block",
      ["min-height"]: "50px"
    },
    props: []
  }
};
