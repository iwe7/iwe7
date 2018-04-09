import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import {
  Iwe7DesignSettingComponent,
  Iwe7DesignComponent
} from "../../interface";
@Component({
  selector: "checkbox-group",
  templateUrl: "./checkbox-group.component.html",
  styleUrls: ["./checkbox-group.component.scss"]
})
export class CheckboxGroupComponent extends Iwe7DesignComponent
  implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}
}
