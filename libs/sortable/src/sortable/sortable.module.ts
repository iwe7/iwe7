import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableComponent, SortableDirective } from './sortable.component';
import { Iwe7CoreModule } from 'iwe7/core';

@NgModule({
  imports: [CommonModule, Iwe7CoreModule],
  declarations: [SortableComponent, SortableDirective],
  exports: [SortableComponent, SortableDirective],
  entryComponents: [SortableComponent]
})
export class SortableModule {
  getComponentByName(key: string) {
    return SortableComponent;
  }
}
