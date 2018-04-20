import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar';
import { NzAvatarModule } from 'iwe7/antd/avatar';
import { NzBadgeModule } from 'iwe7/antd/badge';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzAvatarModule, NzBadgeModule],
  declarations: [AvatarComponent],
  entryComponents: [AvatarComponent]
})
export class AvatarModule {
  get(key: string) {
    return AvatarComponent;
  }
}
