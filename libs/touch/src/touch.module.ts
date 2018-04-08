import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragmoveDirective } from './drag-move.directive';
import { TouchService } from 'iwe7/touch/src/touch.service';

@NgModule({
  imports: [CommonModule],
  declarations: [DragmoveDirective],
  exports: [DragmoveDirective],
  providers: [TouchService]
})
export class Iwe7TouchModule {}
