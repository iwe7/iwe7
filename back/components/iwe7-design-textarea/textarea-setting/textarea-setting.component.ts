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
  selector: "textarea-setting",
  templateUrl: "./textarea-setting.component.html",
  styleUrls: ["./textarea-setting.component.scss"]
})
export class TextareaSettingComponent extends Iwe7DesignSettingComponent
  implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}
}
