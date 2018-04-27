import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { global, parseURL } from '../../global';
import { Store } from '@ngrx/store';
import { LoadAppData } from '../../+state/app-data.actions';
import { LoadAppTable } from '../../+state/app-table.actions';
import { MeepoRender } from '../../render';

@Component({
  selector: 'pages-index',
  templateUrl: './pages-index.component.html',
  styleUrls: ['./pages-index.component.scss']
})
export class PagesIndexComponent implements OnInit {
  get params() {
    return this.parseURL();
  }

  constructor(
    @Inject(DOCUMENT) public doc: HTMLDocument,
    public store: Store<any>,
    public view: ViewContainerRef,
    public render: MeepoRender
  ) {
    this.render.setDefaultView(this.view);
  }

  ngOnInit() {
    let __do = this.params.do || 'index';
    this.store.dispatch(new LoadAppData(__do));
    this.store.dispatch(new LoadAppTable('mc_members'));
  }

  parseURL() {
    return parseURL();
  }
}
