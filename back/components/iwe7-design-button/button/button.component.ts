import { Component, OnInit, ElementRef, Input, Renderer2 } from "@angular/core";
import {
  Iwe7DesignSettingComponent,
  Iwe7DesignComponent
} from "../../interface";
@Component({
  selector: "iwe7-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent extends Iwe7DesignComponent implements OnInit {
  @Input() props: any;
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {
    this.setClass();
  }
}
