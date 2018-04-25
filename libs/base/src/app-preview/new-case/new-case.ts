import { Component, OnInit, HostBinding } from '@angular/core';
import { LokiAppService, MeepoRender } from 'iwe7/render';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'new-case',
  templateUrl: 'new-case.html',
  styleUrls: ['./new-case.scss']
})
export class NewCasePage implements OnInit {
  list: any[] = [];
  setRoot$: Subject<any> = new Subject();
  @HostBinding('attr.id') id: string;
  constructor(public app: LokiAppService, public render: MeepoRender) {}
  ngOnInit() {
    this.list = this.app
      .pipe()
      .where(item => {
        return true;
      })
      .simplesort('$loki')
      .data();
  }

  setItemView(e, item) {
    this.render
      .compiler(
        {
          selector: 'new-case-item',
          inputs: {
            data: item
          },
          outputs: {
            click$: 'click'
          }
        },
        e
      )
      .pipe(map((res: any) => res.data))
      .subscribe(this.setRoot$);
  }
}
