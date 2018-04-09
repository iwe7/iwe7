import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPipe } from './map.pipe';
import { AsyncPipe } from './async2.pipe';
@NgModule({
  imports: [CommonModule],
  declarations: [MapPipe, AsyncPipe],
  exports: [MapPipe, AsyncPipe]
})
export class PipesModule {}
