import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FigcaptionComponent } from './figcaption';
import { SharedModule } from 'iwe7/shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FigcaptionComponent],
  entryComponents: [FigcaptionComponent]
})
export class SysFigcaptionModule {
  get(key: string) {
    return FigcaptionComponent;
  }
}
