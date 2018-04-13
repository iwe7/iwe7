import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPageAddComponent } from './design-page-add.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';

@NgModule({
  imports: [CommonModule],
  declarations: [DesignPageAddComponent],
  entryComponents: [DesignPageAddComponent]
})
export class DesignPageAddModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignPageAddComponent;
  }
}
