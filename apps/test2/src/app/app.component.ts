import {
  Component,
  OnInit,
  NgModuleFactoryLoader,
  ElementRef,
  ViewContainerRef,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { GetViewRefDirective } from 'iwe7/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('ref', { read: GetViewRefDirective })
  ref: GetViewRefDirective;

  @ViewChild('tpl')
  tpl: ElementRef<any>;
  constructor(
    private moduleFactoryLoader: NgModuleFactoryLoader,
    public http: HttpClient,
    public lazyLoader: LazyLoaderService,
    public ele: ElementRef,
    public view: ViewContainerRef
  ) {}

  ngOnInit() {
    this.lazyLoader
      .init(this.tpl.nativeElement, this.ref.view)
      .subscribe(res => {
        // console.log(res);
      });
  }

  load() {}
}
