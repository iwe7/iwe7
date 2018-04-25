import { Element } from '../../element';
import { OnInit, Component, ViewContainerRef } from '@angular/core';
import { MeepoRender } from 'iwe7/render';
import { Subject } from 'rxjs';
@Component({
  selector: 'base-modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss']
})
export class BaseModal extends Element implements OnInit {
  isVisible: boolean = true;

  cancel$: Subject<any> = new Subject();
  ok$: Subject<any> = new Subject();

  constructor(view: ViewContainerRef, private render: MeepoRender) {
    super(view);
  }
  ngOnInit() {
    super.ngOnInit();
  }

  handleCancel(e) {
    this.isVisible = false;
    this.render.remove(this.id);
  }

  handleOk(e) {
    this.isVisible = false;
    this.render.remove(this.id);
  }
}
