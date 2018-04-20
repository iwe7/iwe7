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
  OnChanges,
  Injector
} from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { MeepoRender } from 'meepo-render';
import { IcssService } from 'iwe7-icss';
import { CssBuilderService } from './css-builder.service';
import { CssStyle } from './css-style';

@Component({
  selector: 'iwe7-view',
  templateUrl: './view.html',
  styleUrls: ['./view.scss']
})
export class ViewComponent implements OnInit {
  @ViewChild('content', {
    read: ViewContainerRef
  })
  content: ViewContainerRef;

  @ViewChild('designForm', {
    read: ViewContainerRef
  })
  designForm: ViewContainerRef;

  style: any = {
    width: '100',
    height: '100',
    backgroundColor: '#ccc',
    display: 'block'
  };

  style$: BehaviorSubject<any>;
  menu$: BehaviorSubject<any> = new BehaviorSubject({
    left: '0px',
    top: '0px',
    display: 'none'
  });

  // 注入
  ele: ElementRef;
  icss: IcssService;
  cssBuilder: CssBuilderService;

  //ele
  @ViewChild('menuContainer') menuContainer: ElementRef;
  constructor(public injector: Injector, public cssView: ViewContainerRef) {
    this.ele = this.injector.get(ElementRef);
    this.icss = this.injector.get(IcssService);
    this.cssBuilder = this.injector.get(CssBuilderService);
  }
  ngOnInit() {
    this.style$ = new BehaviorSubject(this.style);
    this.icss.init(
      {
        menu: this.menu$
      },
      this.menuContainer
    );
    this.icss
      .init(
        {
          style: this.style$
        },
        this.ele
      )
      .subscribe();
    fromEvent(this.ele.nativeElement, 'contextmenu')
      .pipe(
        // tap
        tap((res: MouseEvent) => {
          res.stopPropagation();
          res.preventDefault();
        }),
        map((res: MouseEvent) => {
          return {
            x: res.pageX,
            y: res.pageY,
            type: res.type
          };
        }),
        tap(res => {
          this.menu$.next({
            left: res.x + 'px',
            top: res.y + 'px',
            display: 'block'
          });
        })
      )
      .subscribe();

    fromEvent(document, 'click')
      .pipe(
        tap(res => {
          this.menu$.next({
            display: 'none'
          });
        }),
        tap(res => console.log(res))
      )
      .subscribe();
  }

  openStyleBuilder() {
    this.cssBuilder
      .builder(this.designForm, this.ele.nativeElement)
      .subscribe((res: any) => {
        this.style = {
          ...this.style,
          ...res.data
        };
        this.style$.next(this.style);
      });
    this.menu$.next({
      display: 'none'
    });
  }
}
