import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzAvatarComponent } from './nz-avatar.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
@NgModule({
  declarations: [NzAvatarComponent],
  exports: [NzAvatarComponent],
  imports: [CommonModule],
  entryComponents: [NzAvatarComponent]
})
export class NzAvatarModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return NzAvatarComponent;
  }
}
