import {
  Component,
  AfterViewInit,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';

import { Iwe7ButtonProps } from '../props';
@Component({
  selector: 'iwe7-button',
  templateUrl: './iwe7-button.html',
  styleUrls: ['./iwe7-button.scss']
})
export class Iwe7ButtonDesign extends Iwe7DesignBase<Iwe7ButtonProps>
  implements OnInit {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onPropsChange(props: Iwe7ButtonProps) {}

  getDefault() {
    return new Iwe7ButtonProps();
  }

  isSetting(){
    return false;
  }
}
