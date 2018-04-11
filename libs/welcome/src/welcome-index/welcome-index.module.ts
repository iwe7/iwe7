import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeIndexRoutingModule } from './welcome-index-routing.module';
import { WelcomeIndexComponent } from './welcome-index.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { Iwe7SharedModule } from 'iwe7/shared';
import { Iwe7DesignModule } from 'iwe7/design';

@NgModule({
  imports: [
    CommonModule,
    WelcomeIndexRoutingModule,
    Iwe7SharedModule,
    Iwe7DesignModule
  ],
  declarations: [WelcomeIndexComponent]
})
export class WelcomeIndexModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return WelcomeIndexComponent;
  }
}
