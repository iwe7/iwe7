import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseContextMenu } from './context-menu';
@NgModule({
  imports: [CommonModule],
  declarations: [BaseContextMenu],
  entryComponents: [BaseContextMenu]
})
export class BaseContextMenuModule {
  get(key: string) {
    return BaseContextMenu;
  }
}
