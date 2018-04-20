import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundVideoComponent } from './background-video';
import { SharedModule } from 'iwe7/shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [BackgroundVideoComponent],
  entryComponents: [BackgroundVideoComponent]
})
export class SysBackgroundVideoModule {
  get(key: string) {
    return BackgroundVideoComponent;
  }
}
