import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { from, merge, Subject } from 'rxjs';
import { tap, map, flatMap, switchMap, filter } from 'rxjs/operators';
import { MeepoRender } from 'meepo-render';

@Component({
  selector: 'select-forms',
  templateUrl: './select-forms.html',
  styleUrls: ['./select-forms.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectForms implements OnInit {
  label: string;
  list: any[] = [];
  click$: Subject<any> = new Subject();
  constructor(public render: MeepoRender) {}
  ngOnInit() {}

  onClick(e) {
    this.click$.next(e);
  }
}
