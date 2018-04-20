import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { IcssService } from 'iwe7-icss';
declare const $: any;
import {
  BehaviorSubject,
  fromEvent,
  merge,
  animationFrameScheduler
} from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'sys-fullpage',
  templateUrl: './fullpage.html',
  styleUrls: ['./fullpage.scss']
})
export class FullpageComponent implements OnInit {
  ngOnInit() {
    $('#fullpage').fullpage({});
  }
}
