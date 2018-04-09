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
  selector: 'movable-view-setting',
  templateUrl: './movable-view-setting.component.html',
  styleUrls: ['./movable-view-setting.component.scss']
})
export class MovableViewSettingComponent extends Iwe7DesignSettingComponent implements OnInit {

  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {
  }

}
