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
declare const BMap: any;
@Component({
  selector: "map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent extends Iwe7DesignComponent implements OnInit {
  map: any;
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {
    this.map = new BMap.Map(this.ele.nativeElement);
    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
  }
}
