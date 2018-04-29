import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RenderPreviewService } from 'iwe7/render-preview';
@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.scss']
})
export class PageIndexComponent implements OnInit {
  constructor(
    public render: RenderPreviewService,
    public view: ViewContainerRef
  ) {
    this.render.setDefaultView(this.view);
  }

  ngOnInit() {
    this.render
      .compiler({
        selector: 'table-page'
      })
      .subscribe(res => {
        console.log(res);
      });
  }
}
