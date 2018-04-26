import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'iwe7/shared';
import { RulerComponent } from './ruler';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [RulerComponent],
  entryComponents: [RulerComponent]
})
export class RulerModule {
  get(key: string) {
    if (key === 'ruler') {
      return RulerComponent;
    }
  }
}
