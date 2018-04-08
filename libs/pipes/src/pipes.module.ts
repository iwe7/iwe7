import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPipe } from './map.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [MapPipe],
  exports: [MapPipe]
})
export class PipesModule {}
