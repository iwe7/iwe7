import { Element } from '../../element';
import { OnInit, Component, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'base-help-header',
  templateUrl: './help-header.html',
  styleUrls: ['./help-header.scss']
})
export class BaseHelpHeader extends Element implements OnInit {
  constructor(view: ViewContainerRef) {
    super(view);
  }
  ngOnInit() {
    super.ngOnInit();
  }

  addElement(type: string) {}
}
