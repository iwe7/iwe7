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
  selector: 'iwe7-checkbox-group',
  templateUrl: './checkbox-group.html',
  styleUrls: ['./checkbox-group.scss']
})
export class CheckboxGroupComponent implements OnInit {
  nzDisabled: any = {
    type: 'boolean',
    value: false,
    title: '禁用开关'
  };

  value: any = {
    type: 'list',
    value: [
      {
        label: 'label',
        value: 'falue',
        checked: false
      }
    ],
    title: '选项'
  };

  change$: Subject<any> = new Subject();
  ngOnInit() {}

  modelChange() {
    let items = this.value.value.filter(res => {
      return res.checked;
    });
    this.change$.next(items);
  }
  @HostBinding('attr.draggable') draggable: boolean = false;
  constructor(public ele: ElementRef) {}
}
