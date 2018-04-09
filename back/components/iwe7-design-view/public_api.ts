import { ViewComponent } from "./view/view.component";
import { ViewSettingComponent } from "./view-setting/view-setting.component";

export const component = {
  title: "视图容器",
  name: "view",
  show: true,
  setting: ViewSettingComponent,
  preview: ViewComponent,
  props: {
    name: "view",
    class: {
      [`iwe7-design-view`]: true
    },
    style: {
      display: "block",
      ["min-height"]: "50px"
    },
    props: []
  }
};

