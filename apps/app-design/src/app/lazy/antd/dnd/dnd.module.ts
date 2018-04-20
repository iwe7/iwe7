import { NgModule } from '@angular/core';
import { NgxDnDModule } from 'iwe7/dnd';
import { CommonModule } from '@angular/common';
import { DndComponent } from './dnd';

import {
  DevicesModule
} from 'iwe7-devices';
@NgModule({
  imports: [NgxDnDModule, CommonModule, DevicesModule],
  entryComponents: [DndComponent],
  declarations: [DndComponent]
})
export class DndModule {
  get(key: string) {
    return DndComponent;
  }
}
