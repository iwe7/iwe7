import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeIndexRoutingModule } from './welcome-index-routing.module';
import { WelcomeIndexComponent } from './welcome-index.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';

@NgModule({
  imports: [CommonModule, WelcomeIndexRoutingModule],
  declarations: [WelcomeIndexComponent]
})
export class WelcomeIndexModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return WelcomeIndexComponent;
  }
}
