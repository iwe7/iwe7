import { Element } from '../../element';
import { OnInit, Component, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'base-view',
  templateUrl: './view.html',
  styleUrls: ['./view.scss']
})
export class BaseView extends Element implements OnInit {
  constructor(view: ViewContainerRef) {
    super(view);
  }
  ngOnInit() {
    this._updateStyles({
      [`background-color`]: this._randomColor()
    });
    super.ngOnInit();
  }
}
