import { CoverViewComponent } from "./cover-view/cover-view.component";
import { CoverViewSettingComponent } from "./cover-view-setting/cover-view-setting.component";

export const component = {
  title: "遮罩试图",
  name: "cover-view",
  show: true,
  setting: CoverViewSettingComponent,
  preview: CoverViewComponent,
  props: {
    name: "cover-view",
    class: {
      [`iwe7-design-cover-view`]: true
    },
    style: {
      display: "block",
      ["min-height"]: "50px"
    },
    props: []
  }
};
