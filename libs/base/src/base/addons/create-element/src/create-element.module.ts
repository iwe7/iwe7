import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'iwe7/shared';
import { CreateElementPage } from './create-element';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CreateElementPage],
  entryComponents: [CreateElementPage]
})
export class CreateElementModule {
  get(key: string) {
    if (key === 'create-element') {
      return CreateElementPage;
    }
  }
}
