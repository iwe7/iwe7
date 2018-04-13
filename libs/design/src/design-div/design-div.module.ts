import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignDivComponent } from './design-div.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';

@NgModule({
  imports: [CommonModule],
  declarations: [DesignDivComponent],
  entryComponents: [DesignDivComponent]
})
export class DesignDivModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignDivComponent;
  }
}
