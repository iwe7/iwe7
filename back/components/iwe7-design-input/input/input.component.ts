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
  selector: "iwe7-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent extends Iwe7DesignComponent implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}
}
