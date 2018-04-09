import { PageComponent } from "./page/page.component";
import { PageSettingComponent } from "./page-setting/page-setting.component";

export const component = {
  title: "页面",
  name: "page",
  show: false,
  setting: PageSettingComponent,
  preview: PageComponent,
  props: {
    name: 'page',
    text: "",
    class: {
      [`iwe7-design-page`]: true
    },
    style: {
      display: "block"
    },
    props: []
  }
};
