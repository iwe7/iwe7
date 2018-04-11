import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasFullComponent } from './canvas-full/canvas-full.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CanvasFullComponent],
  exports: [CanvasFullComponent]
})
export class CanvasModule {}
