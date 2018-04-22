import {
  Component,
  OnInit,
  ViewContainerRef,
  ChangeDetectorRef,
  Injector,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { MeepoRender } from 'meepo-render';
import { Subject, BehaviorSubject, from } from 'rxjs';
import { tap, map, switchMap, takeLast, debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('view', {
    read: ViewContainerRef
  })
  view: ViewContainerRef;
  constructor(public _render: MeepoRender, public store: Store<any>) {}
  height: number;
  ngOnInit() {
    this.store
      .pipe(
        map(res => res.app),
        switchMap(res => {
          return this._render.compiler(res, this.view);
        }),
        // tap
        tap(res => console.log(res))
      )
      .subscribe();
  }
}
