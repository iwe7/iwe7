import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  HostBinding,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
@Component({
  selector: 'iwe7-checkbox',
  templateUrl: './checkbox.html',
  styleUrls: ['./checkbox.scss']
})
export class CheckboxComponent implements OnInit {
  @HostBinding('attr.draggable') draggable: boolean = false;

  change$ = new EventEmitter<boolean>();

  nzLabel: any = {
    type: 'string',
    value: 'label'
  };

  nzValue: any = {
    type: 'boolean',
    value: false
  };

  nzAutoFocus: any = {
    type: 'boolean',
    value: false
  };

  nzDisabled: any = {
    type: 'boolean',
    value: false
  };

  nzIndeterminate: any = {
    type: 'boolean',
    value: false
  };

  nzChecked: any = {
    type: 'boolean',
    value: false
  };
  ngOnInit() {}

  constructor(public ele: ElementRef) {}

  checkedChange(e) {
    this.nzChecked.value = e;
    this.change$.next(e);
  }
}
