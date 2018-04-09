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
  selector: 'video-setting',
  templateUrl: './video-setting.component.html',
  styleUrls: ['./video-setting.component.scss']
})
export class VideoSettingComponent extends Iwe7DesignSettingComponent implements OnInit {

  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {
  }

}
