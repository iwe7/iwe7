import { Component, OnInit, ChangeDetectorRef, Injector } from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';
@Component({
  selector: 'welcome-index',
  templateUrl: './welcome-index.component.html',
  styleUrls: ['./welcome-index.component.scss']
})
export class WelcomeIndexComponent extends Iwe7DesignBase<any>
  implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {}
  onPropsChange(res: any) {
  }
}
