import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragmoveDirective } from './drag-move.directive';
import { SwipeMoveDirective } from './swipe-move.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DragmoveDirective, SwipeMoveDirective],
  exports: [DragmoveDirective, SwipeMoveDirective],
  providers: []
})
export class Iwe7TouchModule {}
