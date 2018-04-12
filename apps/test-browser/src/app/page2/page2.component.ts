import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  ViewContainerRef,
  AfterViewInit,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component
  implements OnInit,
    OnChanges,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit {
  constructor(public cd: ChangeDetectorRef, public _test: TestService) {
    this._test.index$.subscribe(res => {
      console.log(res);
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
    // 有效
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}
