import { NgModule } from '@angular/core';
import { ViewComponent } from './view';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ViewComponent],
  entryComponents: [ViewComponent]
})
export class ViewModule {
  get(key: string) {
    return ViewComponent;
  }
}
