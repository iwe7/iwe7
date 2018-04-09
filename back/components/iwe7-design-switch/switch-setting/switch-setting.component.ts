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
  selector: "switch-setting",
  templateUrl: "./switch-setting.component.html",
  styleUrls: ["./switch-setting.component.scss"]
})
export class SwitchSettingComponent extends Iwe7DesignSettingComponent
  implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}
}
