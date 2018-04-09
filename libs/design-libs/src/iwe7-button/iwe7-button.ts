import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';

export class ButtonProps {}
@Component({
  selector: 'iwe7-button',
  templateUrl: './iwe7-button.html',
  styleUrls: ['./iwe7-button.scss']
})
export class Iwe7ButtonDesign extends Iwe7DesignBase<ButtonProps> {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
  onPropsChange(props: ButtonProps) {}
}
