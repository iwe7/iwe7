import {
  Component,
  OnInit,
  ElementRef,
  ViewContainerRef,
  AfterViewInit,
  Input
} from '@angular/core';
import { LazyLoaderService } from '../lazy-loader';

@Component({
  selector: 'lazy-load-view',
  templateUrl: './lazy-load-view.component.html',
  styleUrls: ['./lazy-load-view.component.scss']
})
export class LazyLoadViewComponent implements OnInit, AfterViewInit {
  @Input() father: any;
  constructor(
    private lazyload: LazyLoaderService,
    private ele: ElementRef,
    private view: ViewContainerRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.lazyload.init(this.ele.nativeElement, this.view, this.father).subscribe(res => {
    });
  }
}
