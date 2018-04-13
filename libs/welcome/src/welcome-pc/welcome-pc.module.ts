import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePcComponent } from './welcome-pc.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
@NgModule({
  imports: [CommonModule],
  declarations: [WelcomePcComponent],
  entryComponents: [WelcomePcComponent]
})
export class WelcomePcModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return WelcomePcComponent;
  }
}
