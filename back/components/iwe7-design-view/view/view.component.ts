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
  selector: "view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent extends Iwe7DesignComponent implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}
}
