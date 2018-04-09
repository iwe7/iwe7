import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  HostBinding
} from "@angular/core";
import {
  Iwe7DesignSettingComponent,
  Iwe7DesignComponent
} from "../../interface";
@Component({
  selector: "form-setting",
  templateUrl: "./form-setting.component.html",
  styleUrls: ["./form-setting.component.scss"]
})
export class FormSettingComponent extends Iwe7DesignSettingComponent
  implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}

  addInput() {
    this.props.props.push({
      name: "input",
      value: "",
      type: "text",
      password: false,
      placeholder: "请输入文本",
      label: "标题",
      disabled: false,
      class: {
        [`iwe7-design-input`]: true
      },
      style: {
        display: "block",
        [`background-color`]: "#efefef"
      },
      props: []
    });
  }

  addTextarea() {
    this.props.props.push({
      name: "textarea",
      placeholder: "请输入文本",
      disabled: false,
      class: {
        [`iwe7-design-input`]: true
      },
      style: {
        display: "block"
      },
      props: []
    });
  }

  addSwitch() {
    this.props.props.push({
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
    });
  }

  addCheckboxGroup() {
    this.props.props.push({
      name: "checkbox-group",
      class: {
        [`iwe7-design-checkbox-group`]: true
      },
      style: {},
      props: []
    });
  }

  addButton() {
    this.props.props.push({
      decode: true,
      name: "button",
      text: "我是按钮",
      class: {
        [`iwe7-design-button`]: true,
        [`weui-btn`]: true,
        [`weui-btn_primary`]: true,
        [`weui-btn_mini`]: false
      },
      style: {},
      props: []
    });
  }
}
