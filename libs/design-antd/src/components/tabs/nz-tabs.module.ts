import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzTabBodyComponent } from './nz-tab-body.component';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
import { NzTabSetComponent } from './nz-tabset.component';

@NgModule({
  declarations: [
    NzTabComponent,
    NzTabSetComponent,
    NzTabsNavComponent,
    NzTabLabelDirective,
    NzTabsInkBarDirective,
    NzTabBodyComponent
  ],
  exports: [
    NzTabComponent,
    NzTabSetComponent,
    NzTabsNavComponent,
    NzTabLabelDirective,
    NzTabsInkBarDirective,
    NzTabBodyComponent
  ],
  imports: [CommonModule, ObserversModule]
})
export class NzTabsModule {
  getComponentByName(key: string){
    if(key === 'nz-tab'){
      return NzTabComponent
    }
    if(key === 'nz-tab-set'){
      return NzTabSetComponent;
    }
    if(key === 'nz-tabs-nav'){
      return NzTabsNavComponent;
    }
    if(key === 'nz-tab-label'){
      return NzTabLabelDirective;
    }
    if(key === 'nz-tabs-ink-bar'){
      return NzTabsInkBarDirective;
    }
    if(key === 'nz-tab-body'){
      return NzTabBodyComponent;
    }

  }
}
