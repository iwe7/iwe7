import { NgModule } from '@angular/core';
import { NzTabsModule } from 'iwe7/antd/tabs';
import { TabsComponent } from './tabs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, NzTabsModule, FormsModule, SharedModule],
  declarations: [TabsComponent],
  entryComponents: [TabsComponent]
})
export class TabsModule {
  get(key: string) {
    return TabsComponent;
  }
}
