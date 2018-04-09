import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from '../base-component';
@Component({
  selector: 'base-test',
  templateUrl: './base-test.component.html',
  styleUrls: ['./base-test.component.scss']
})
export class BaseTestComponent extends BaseComponent<any> implements OnInit {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
  ngOnInit() {}
}
