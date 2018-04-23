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
import { Subject, BehaviorSubject, from, merge, Observable } from 'rxjs';
import {
  tap,
  map,
  switchMap,
  takeLast,
  debounceTime,
  take
} from 'rxjs/operators';
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
  constructor(public _render: MeepoRender, public cd: ChangeDetectorRef) {}
  ngOnInit() {
    let opt: any = {
      selector: 'base-text',
      inputs: {
        text: '222'
      }
    };
    let i = 0;
    setInterval(() => {
      i++;
      opt.inputs.text += i;
      this.cd.markForCheck();
    }, 1000);
    this._render.compiler(opt, this.view).subscribe();
  }
}
