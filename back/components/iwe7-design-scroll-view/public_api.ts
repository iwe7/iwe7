import { ScrollViewComponent } from "./scroll-view/scroll-view.component";
import { ScrollViewSettingComponent } from "./scroll-view-setting/scroll-view-setting.component";

export const component = {
  title: "可滚动视图",
  name: "scroll-view",
  show: true,
  setting: ScrollViewSettingComponent,
  preview: ScrollViewComponent,
  props: {
    name: "scroll-view",
    class: {
      [`iwe7-design-scroll-view`]: true
    },
    style: {
      display: "block",
      ["min-height"]: "50px"
    },
    props: []
  }
};
