import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullpageComponent } from './fullpage';
import { SharedModule } from 'iwe7/shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FullpageComponent],
  entryComponents: [FullpageComponent]
})
export class SysFullpageModule {
  get(key: string) {
    return FullpageComponent;
  }
}
