import { Component } from '@angular/core';

@Component({
  selector: 'iwe7-dnd',
  templateUrl: './dnd.html',
  styleUrls: ['./dnd.scss']
})
export class DndComponent {
  droppableItemClass: any;
  targetBuilderTools: any;
  sourceBuilderTools: any = [{
    name: '测试'
  }];
  log(e) {
    console.log(e);
  }
  builderDrag(e) {
    console.log(e);
  }
}
