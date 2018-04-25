import {
  Component,
  OnInit,
  HostBinding,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { LokiPageDataService, MeepoRender } from 'iwe7/render';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'element-design',
  templateUrl: './element-design.html',
  styleUrls: ['./element-design.scss']
})
export class ElementDesignPage implements OnInit {
  @HostBinding('attr.id') id: string;
  @HostBinding('attr.data-title') title: string;

  @ViewChild('codeMirror', {
    read: ViewContainerRef
  })
  codeMirror: ViewContainerRef;

  list: any[] = [];
  constructor(
    public element: LokiPageDataService,
    public render: MeepoRender
  ) {}
  ngOnInit() {
    this.list = this.element.where(item => {
      return true;
    });
    this.render
      .showElement(
        {
          code: 'code.mirror',
          title: '编辑器'
        },
        {},
        {},
        this.codeMirror
      )
      .subscribe();
  }

  select(e) {
    console.log(e);
  }
}
