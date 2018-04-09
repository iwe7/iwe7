import { Component, OnInit, Input, ElementRef } from "@angular/core";

@Component({
  selector: "text-setting",
  templateUrl: "./text-setting.component.html",
  styleUrls: ["./text-setting.component.scss"]
})
export class TextSettingComponent implements OnInit {
  @Input() props: any;
  instance: any;
  constructor(public ele: ElementRef) {}

  ngOnInit() {}

  onChange() {
    this.instance.update();
  }
}
