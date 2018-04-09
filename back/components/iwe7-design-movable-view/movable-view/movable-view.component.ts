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
  selector: 'movable-view',
  templateUrl: './movable-view.component.html',
  styleUrls: ['./movable-view.component.scss']
})
export class MovableViewComponent extends Iwe7DesignComponent implements OnInit {

  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {
  }

}
