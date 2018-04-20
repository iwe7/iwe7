import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { from, merge, Subject } from 'rxjs';
import { tap, map, flatMap, switchMap, filter } from 'rxjs/operators';
import { IconsService } from '../../../core/icons.service';
import { MeepoRender } from 'meepo-render';
@Component({
  selector: 'select-test',
  templateUrl: './select-test.html',
  styleUrls: ['./select-test.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectTest implements OnInit {
  icon: string;
  visible: boolean;
  constructor(public icons: IconsService, public render: MeepoRender) {}
  ngOnInit() {}
  change$: Subject<any> = new Subject();
  setView(e: any) {
    this.icons.getIcons().subscribe(res => {
      let opt: any = {
        selector: 'nz-icon',
        inputs: {
          name: {
            value: res
          }
        },
        outputs: ['click$', 'hover$']
      };
      this.render.compiler(opt, e).subscribe((res: any) => {
        this.icon = res.data;
        if (res.type === 'click$') {
          this.visible = false;
        }
        this.change$.next(res.data);
      });
    });
  }
}
