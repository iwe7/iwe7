import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignDivRoutingModule } from './design-div-routing.module';
import { DesignDivComponent } from './design-div.component';
import { RouterModule } from '@angular/router';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
@NgModule({
  imports: [CommonModule, DesignDivRoutingModule],
  declarations: [DesignDivComponent]
})
export class DesignDivModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignDivComponent;
  }
}
