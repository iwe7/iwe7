import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignElementsAddComponent } from './design-elements-add.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DesignElementsAddComponent],
  entryComponents: [DesignElementsAddComponent]
})
export class DesignElementsAddModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignElementsAddComponent;
  }
}
