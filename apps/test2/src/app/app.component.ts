import { Component, OnInit, NgModuleFactoryLoader, ElementRef, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LazyLoaderService } from 'iwe7/lazy-load';
declare var System: any;
declare var webpackJsonp: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private moduleFactoryLoader: NgModuleFactoryLoader,
    public http: HttpClient,
    public lazyLoader: LazyLoaderService,
    public ele: ElementRef,
    public view: ViewContainerRef
  ) {}

  ngOnInit() {
    this.lazyLoader.init(this.ele.nativeElement, this.view);
  }

  load() {}
}
