import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableComponent } from './sortable.component';
import { Iwe7CoreModule } from 'iwe7/core';

@NgModule({
  imports: [CommonModule, Iwe7CoreModule],
  declarations: [SortableComponent],
  exports: [SortableComponent],
  entryComponents: [SortableComponent]
})
export class SortableModule {
  getComponentByName(key: string) {
    return SortableComponent;
  }
}
