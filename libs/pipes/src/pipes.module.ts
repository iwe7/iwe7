import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPipe } from './map.pipe';
import { OfPipe } from './of.pipe';
@NgModule({
  imports: [CommonModule],
  declarations: [MapPipe, OfPipe],
  exports: [MapPipe, OfPipe]
})
export class PipesModule {}
