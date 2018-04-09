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
  selector: 'scroll-view-setting',
  templateUrl: './scroll-view-setting.component.html',
  styleUrls: ['./scroll-view-setting.component.scss']
})
export class ScrollViewSettingComponent extends Iwe7DesignSettingComponent implements OnInit {

  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {
  }

}
