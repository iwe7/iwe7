import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzColorsComponent } from './colors';
import { NzTagModule } from '../tag/nz-tag.module';
import { Iwe7PipesModule } from 'iwe7/pipes';
@NgModule({
  imports: [CommonModule, NzTagModule, Iwe7PipesModule],
  declarations: [NzColorsComponent],
  entryComponents: [NzColorsComponent]
})
export class NzColorsModule {
  getComponentByName(key: string) {
    return NzColorsComponent;
  }
}
