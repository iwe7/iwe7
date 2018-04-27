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
import { MeepoRender } from 'iwe7/render';
import { IcssService } from 'iwe7-icss';
import { Element } from 'iwe7/base';
@Component({
  selector: 'iwe7-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class LayoutComponent extends Element implements OnInit {
  @ViewChild('content', {
    read: ViewContainerRef
  })
  content: ViewContainerRef;
  isCollapsed: boolean = false;
  sliders: any[] = [];
  headers: any[] = [];
  user: any[] = [];
  constructor(view: ViewContainerRef) {
    super(view);
  }
  ngOnInit() {
    super.ngOnInit();
  }
}
