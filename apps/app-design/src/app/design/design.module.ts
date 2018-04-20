import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignElementsComponent } from './design-elements/design-elements.component';
import { DesignSettingComponent } from './design-setting/design-setting.component';
import { DesignJsonComponent } from './design-json/design-json';
import { DesignCreateComponent } from './design-create/design-create';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    DesignElementsComponent,
    DesignSettingComponent,
    DesignJsonComponent,
    DesignCreateComponent
  ],
  exports: [
    DesignElementsComponent,
    DesignSettingComponent,
    DesignJsonComponent,
    DesignCreateComponent
  ]
})
export class DesignModule {}
