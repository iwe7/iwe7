import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  HostBinding,
  ViewChild
} from "@angular/core";
import {
  Iwe7DesignSettingComponent,
  Iwe7DesignComponent
} from "../../interface";
@Component({
  selector: "cover-view-setting",
  templateUrl: "./cover-view-setting.component.html",
  styleUrls: ["./cover-view-setting.component.scss"]
})
export class CoverViewSettingComponent extends Iwe7DesignSettingComponent implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}
}
