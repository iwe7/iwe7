import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LayoutLazyModule,
  LayoutComponent,
} from '../../layout';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, LayoutLazyModule]
})
export class LayoutModule {
  get(key: string) {
    if (key === 'layout') {
      return LayoutComponent;
    }
  }
}
