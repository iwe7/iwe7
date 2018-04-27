import { NgModule } from '@angular/core';
import { NzMenuModule } from 'iwe7/antd/menu';
import { MenuComponent } from './menu';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, NzMenuModule, FormsModule, SharedModule],
  declarations: [MenuComponent],
  entryComponents: [MenuComponent]
})
export class MenuModule {
  get(key: string) {
    return MenuComponent;
  }
}
