import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';
@Component({
  selector: 'welcome-index',
  templateUrl: './welcome-index.component.html',
  styleUrls: ['./welcome-index.component.scss']
})
export class WelcomeIndexComponent extends Iwe7DesignBase<any>
  implements OnInit {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }

  ngOnInit() {}

  onPropsChange(res: any) {}
}
