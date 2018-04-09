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
  selector: 'icon-setting',
  templateUrl: './icon-setting.component.html',
  styleUrls: ['./icon-setting.component.scss']
})
export class IconSettingComponent extends Iwe7DesignSettingComponent implements OnInit {

  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {
  }

}
