import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MeepoRender } from 'meepo-render';

@Component({
  selector: 'iwe7-rate',
  templateUrl: './rate.html',
  styleUrls: ['./rate.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RateComponent implements OnInit {
  nzAutoFocus: any = {
    type: 'boolean',
    value: false
  };

  nzCount: any = {
    type: 'number',
    value: 5
  };

  nzAllowHalf: any = {
    type: 'boolean',
    value: false
  };

  nzAllowClear: any = {
    type: 'boolean',
    value: false
  };

  nzValue: any = {
    type: 'number',
    value: 5
  };

  nzDisabled: any = {
    type: 'boolean',
    value: false
  };
  children: any = {};

  ngOnInit() {}
  change$: Subject<any> = new Subject();

  constructor(public render: MeepoRender) {}
  modelChange() {
    this.change$.next(this.nzValue.value);
  }
}
