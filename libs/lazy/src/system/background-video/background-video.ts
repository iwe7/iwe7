import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { IcssService } from 'iwe7-icss';
import {
  BehaviorSubject,
  fromEvent,
  merge,
  animationFrameScheduler
} from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'sys-background-video',
  templateUrl: './background-video.html',
  styleUrls: ['./background-video.scss']
})
export class BackgroundVideoComponent implements OnInit {
  @ViewChild('content', {
    read: ViewContainerRef
  })
  content: ViewContainerRef;
  ngOnInit() {}
}
