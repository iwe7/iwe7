import { FormComponent } from "./form/form.component";
import { FormSettingComponent } from "./form-setting/form-setting.component";

export const component = {
  title: "表单",
  name: "form",
  show: true,
  setting: FormSettingComponent,
  preview: FormComponent,
  props: {
    name: "form",
    class: {
      [`iwe7-design-form`]: true,
      [`weui-cells`]: true,
      [`weui-cells_form`]: true
    },
    style: {
      display: 'block'
    },
    props: []
  }
};
