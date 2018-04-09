import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { BaseComponent } from '../base-component';
@Component({
  selector: 'base-test',
  templateUrl: './base-test.component.html',
  styleUrls: ['./base-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseTestComponent extends BaseComponent implements OnInit {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
}
