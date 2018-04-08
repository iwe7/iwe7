import { Component, OnInit, ElementRef } from '@angular/core';
import { IcssService, IcssInterface } from 'iwe7/icss';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  disabled: boolean = true;
  sub: Subject<any> = new Subject();
  color: string = 'primary';
  constructor(public icss: IcssService, public ele: ElementRef) {}
  ngOnInit() {}
  click(e) {
    this.disabled = !this.disabled;
  }
}
