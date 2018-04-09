import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import {
  Iwe7DesignSettingComponent,
  Iwe7DesignComponent
} from "../../interface";
@Component({
  selector: "checkbox-setting",
  templateUrl: "./checkbox-setting.component.html",
  styleUrls: ["./checkbox-setting.component.scss"]
})
export class CheckboxSettingComponent extends Iwe7DesignSettingComponent
  implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}
}
