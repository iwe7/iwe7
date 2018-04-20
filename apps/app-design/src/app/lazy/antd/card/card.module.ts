import { NgModule } from '@angular/core';
import { CardComponent } from './card';
import { NzCardModule } from 'iwe7/antd/card';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzCardModule],
  declarations: [CardComponent],
  entryComponents: [CardComponent]
})
export class CardModule {
  get(key: string) {
    return CardComponent;
  }
}
