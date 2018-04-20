import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  HostBinding,
  ElementRef,
  EventEmitter
} from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IcssService } from 'iwe7-icss';
@Component({
  selector: 'meepo-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('header', { read: ViewContainerRef })
  header: ViewContainerRef;

  @ViewChild('content', { read: ViewContainerRef })
  content: ViewContainerRef;

  @ViewChild('footer', { read: ViewContainerRef })
  footer: ViewContainerRef;

  @ViewChild('menu', { read: ViewContainerRef })
  menu: ViewContainerRef;

  @ViewChild('menuContainer') menuContainer: ElementRef;

  menuList: any[];
  title: any;

  menu$: BehaviorSubject<any> = new BehaviorSubject({
    left: '0px',
    top: '0px',
    display: 'none'
  });

  tip: string;
  // get请求
  ajax$: EventEmitter<any> = new EventEmitter();
  // popover
  popover$: EventEmitter<any> = new EventEmitter();
  // alert
  alert$: EventEmitter<any> = new EventEmitter();

  constructor(public ele: ElementRef, public icss: IcssService) {}

  ngOnInit() {
    this.icss.init(
      {
        menu: this.menu$
      },
      this.menuContainer
    );
    fromEvent(this.ele.nativeElement, 'contextmenu')
      .pipe(
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
  }

  onMenu(item: any) {
    if (item.code.value === 'rights.page.create') {
      this.popover$.emit({
        selector: 'design-create',
        inputs: {},
        outputs: ['ajax$']
      });
    } else {
      this.ajax$.emit(item);
    }
    this.menu$.next({
      display: 'none'
    });
  }
}
