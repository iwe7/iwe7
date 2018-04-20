import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  HostBinding,
  ElementRef,
  ViewEncapsulation,
  Input,
  OnChanges
} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
import { IcssService } from 'iwe7-icss';

@Component({
  selector: 'nz-icon',
  template: `<i (click)="onClick(name.value)" (mouseover)="onHover(name.value)" class="anticon" [ngClass]="'anticon-'+name.value"></i>`
})
export class IconComponent implements OnInit {
  name: any = {
    type: 'icon',
    value: 'heart-o'
  };

  click$: Subject<any> = new Subject();
  hover$: Subject<any> = new Subject();
  ngOnInit() {}

  onClick(e) {
    this.click$.next(e);
  }

  onHover(e) {
    this.hover$.next(e);
  }
}
