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
import { Router, ActivatedRoute } from '@angular/router';
let defaultColor = {
  hex: '#194d33',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.3,
    a: 1
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 1
  },
  a: 1
};

import { MeepoRender, RenderOptions } from 'meepo-render';
import { Subject, BehaviorSubject, from } from 'rxjs';
import { tap, map, switchMap, takeLast } from 'rxjs/operators';
import { InitService } from './core/init.service';

import { ElementsService } from './elements';
import { CreateElementService } from './create-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private opts: any;
  private data: any = {};

  @ViewChild('view', {
    read: ViewContainerRef
  })
  view: ViewContainerRef;
  constructor(
    public injector: Injector,
    public _render: MeepoRender,
    public _init: InitService,
    public route: ActivatedRoute,
    public elements: ElementsService,
    public create: CreateElementService,
    public ele: ElementRef
  ) {
    this.route.queryParams.subscribe(res => {
      this.data['code'] = res.code;
    });
  }
  height: number;
  ngOnInit() {
    this.height = this.ele.nativeElement.clientHeight;
    let data: any = {
      selector: 'base-view',
      inputs: {
        text: 'text0'
      },
      outputs: ['change$'],
      children: {
        content: {
          selector: 'base-view'
        }
      }
    };
    this._render.compiler(data, this.view).subscribe(res => {
      console.log(res);
    });
    // this.createElement();
  }

  createElement() {
    this.view.clear();
    this.create.render('imeepos.nz-input', this.view);
  }
  manageElement() {
    this.view.clear();
  }
}
