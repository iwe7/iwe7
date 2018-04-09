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
  selector: "image-setting",
  templateUrl: "./image-setting.component.html",
  styleUrls: ["./image-setting.component.scss"]
})
export class ImageSettingComponent extends Iwe7DesignSettingComponent implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}
}
