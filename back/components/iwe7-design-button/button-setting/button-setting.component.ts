import { Component, OnInit, ElementRef, Input, Renderer2 } from "@angular/core";
import {
  Iwe7DesignSettingComponent,
  Iwe7DesignComponent
} from "../../interface";
import { FormBuilder, FormGroup } from "@angular/forms";
import * as _ from "underscore";
@Component({
  selector: "button-setting",
  templateUrl: "./button-setting.component.html",
  styleUrls: ["./button-setting.component.scss"]
})
export class ButtonSettingComponent extends Iwe7DesignSettingComponent
  implements OnInit {
  form: FormGroup;
  @Input() props: any;
  constructor(ele: ElementRef, private fb: FormBuilder, render: Renderer2) {
    super(ele, render);
    this.form = this.fb.group({});
  }

  ngOnInit() {
    _.map(this.props, (item, key) => {
      if (!this.form.contains(key + "")) {
        if (typeof item == "object") {
          this.form.addControl(key + "", this.fb.group(item));
        } else {
          this.form.addControl(key + "", this.fb.control(item));
        }
      }
    });
    this.form.get("class").valueChanges.subscribe(res => {
      this.props.class = res;
      this.instance.setClass();
    });
  }

  setSmall(val) {
    this.form.get("class.weui-btn_mini").setValue(val);
  }
}
