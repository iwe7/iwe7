import { MapComponent } from "./map/map.component";
import { MapSettingComponent } from "./map-setting/map-setting.component";

export const component = {
  title: "地图",
  name: "map",
  show: true,
  setting: MapSettingComponent,
  preview: MapComponent,
  props: {
    name: "map",
    src: "",
    class: {
      [`iwe7-design-map`]: true
    },
    style: {
      display: "block",
      ["min-height"]: "200px"
    },
    props: []
  }
};
