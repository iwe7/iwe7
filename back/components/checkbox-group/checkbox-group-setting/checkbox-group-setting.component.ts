import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import {
  Iwe7DesignSettingComponent,
  Iwe7DesignComponent
} from "../../interface";
@Component({
  selector: "checkbox-group-setting",
  templateUrl: "./checkbox-group-setting.component.html",
  styleUrls: ["./checkbox-group-setting.component.scss"]
})
export class CheckboxGroupSettingComponent extends Iwe7DesignSettingComponent
  implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}

  add(){
    this.props.props.push({
      value: '0',
      code: 'xiangmu0',
      label: "项目0",
      disabled: false,
      checked: false,
      color: '',
      name: 'checkbox',
      id: new Date().getTime()
    });
    console.log(this.props);
  }
}
