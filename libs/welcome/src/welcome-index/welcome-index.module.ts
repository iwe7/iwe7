import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeIndexComponent } from './welcome-index.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { Iwe7SharedModule } from 'iwe7/shared';
import { Iwe7DesignModule } from 'iwe7/design';

@NgModule({
  imports: [
    CommonModule,
    Iwe7SharedModule,
    Iwe7DesignModule
  ],
  declarations: [WelcomeIndexComponent],
  entryComponents: [WelcomeIndexComponent]
})
export class WelcomeIndexModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return WelcomeIndexComponent;
  }
}
