import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
@Component({
  selector: 'iwe7-switch',
  templateUrl: './switch.html',
  styleUrls: ['./switch.scss']
})
export class SwitchComponent implements OnInit {
  @ViewChild('checkedView', {
    read: ViewContainerRef
  })
  checkedView: ViewContainerRef;

  @ViewChild('unCheckedView', {
    read: ViewContainerRef
  })
  unCheckedView: ViewContainerRef;

  value: any = {
    type: 'boolean',
    value: false
  };

  nzSize: any = {
    type: 'select',
    value: 'default',
    options: [
      {
        title: '默认',
        value: 'default'
      },
      {
        title: '小尺寸',
        value: 'small'
      }
    ]
  };

  nzLoading: any = {
    type: 'boolean',
    value: false
  };

  nzDisabled: any = {
    type: 'boolean',
    value: false
  };

  change$: Subject<boolean> = new Subject();

  children: any;

  ngOnInit() {}

  modelChange() {
    this.change$.next(this.value.value);
  }
}
