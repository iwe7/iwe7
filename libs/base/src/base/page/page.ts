import { Element } from '../../element';
import { OnInit, Component, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'base-page',
  templateUrl: './page.html',
  styleUrls: ['./page.scss']
})
export class BasePage extends Element implements OnInit {
  text: string;
  constructor(view: ViewContainerRef) {
    super(view);
  }
  ngOnInit() {
    super.ngOnInit();
  }
}
