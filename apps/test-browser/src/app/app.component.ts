import {
  Component,
  OnInit,
  NgModuleRef,
  AfterContentInit,
  OnChanges,
  Attribute,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TestService } from './test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  index: number = 0;
  constructor(public cd: ChangeDetectorRef, public test: TestService) {}
  ngOnInit() {
    this.test.index$.subscribe(res => {
      console.log('app ', res);
      this.cd.detectChanges();
    });
  }

  ngOnChanges(changes) {
    console.log(changes);
  }
}
