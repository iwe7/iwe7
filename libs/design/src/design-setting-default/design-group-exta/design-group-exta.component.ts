import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { Iwe7DesignBase } from '../../iwe7-design';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'div[design-group-exta]',
  templateUrl: './design-group-exta.component.html',
  styleUrls: ['./design-group-exta.component.scss']
})
export class DesignGroupExtaComponent extends Iwe7DesignBase<any>
  implements OnInit {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
  onPropsChange(res: any) {
  }
}
