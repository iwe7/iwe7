import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'page-setting',
  templateUrl: './page-setting.component.html',
  styleUrls: ['./page-setting.component.scss']
})
export class PageSettingComponent implements OnInit {
  @Input() props: any;
  constructor(
    public ele: ElementRef
  ) { }

  ngOnInit() {
  }

}
