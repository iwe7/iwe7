import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPageEmptyComponent } from './design-page-empty.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
@NgModule({
  imports: [CommonModule],
  declarations: [DesignPageEmptyComponent],
  entryComponents: [DesignPageEmptyComponent]
})
export class DesignPageEmptyModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignPageEmptyComponent;
  }
}
