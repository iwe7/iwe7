import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent implements OnInit {
  // 页面数据源
  @Input() props: BehaviorSubject<any> = new BehaviorSubject({});
  constructor() {}
  ngOnInit() {
    this.props.subscribe(res => {
      // console.log(res);
    });
  }
}
