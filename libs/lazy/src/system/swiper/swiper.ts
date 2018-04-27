import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewContainerRef,
  ViewChild,
  HostBinding,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';
import { IcssService } from 'iwe7-icss';
import Swiper from 'swiper';
import {
  BehaviorSubject,
  fromEvent,
  merge,
  animationFrameScheduler
} from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { MeepoRender } from 'meepo-render';
@Component({
  selector: 'sys-swiper',
  templateUrl: './swiper.html',
  styleUrls: ['./swiper.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperComponent implements OnInit, AfterViewInit {
  @HostBinding('class.swiper-container') _container: boolean = true;
  @ViewChild('header', {
    read: ViewContainerRef
  })
  header: ViewContainerRef;
  @ViewChild('footer', {
    read: ViewContainerRef
  })
  footer: ViewContainerRef;
  items: any = [
    {
      children: {
        selector: 'sys-background-video',
        inputs: {
          text: {
            value: 'span1'
          }
        },
        children: {
          content: {
            selector: 'sys-figcaption'
          }
        }
      }
    }
  ];
  constructor(public ele: ElementRef, public render: MeepoRender) {}
  ngOnInit() {}

  ngAfterViewInit() {
    let height = this.ele.nativeElement.clientHeight;
    new Swiper(this.ele.nativeElement, {
      direction: 'vertical',
      height: height,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

  setView(e, item) {
    this.render.compiler(item.children, e).subscribe();
  }
}
