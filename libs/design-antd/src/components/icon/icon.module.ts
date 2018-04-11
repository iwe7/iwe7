import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconRoutingModule } from './icon-routing.module';
import { IconComponent } from './icon.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';

@NgModule({
  imports: [CommonModule, IconRoutingModule],
  declarations: [IconComponent]
})
export class NzIconModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return IconComponent;
  }
}
