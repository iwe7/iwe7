import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';
import { LazyLoaderService } from '../lazy-loader';

@Component({
  selector: 'lazy-load-view',
  templateUrl: './lazy-load-view.component.html',
  styleUrls: ['./lazy-load-view.component.scss']
})
export class LazyLoadViewComponent implements OnInit {
  constructor(
    private lazyload: LazyLoaderService,
    private ele: ElementRef,
    private view: ViewContainerRef
  ) {}

  ngOnInit() {
    this.lazyload.init(this.ele.nativeElement, this.view).subscribe(res => {
      console.log('init');
    });
  }
}
