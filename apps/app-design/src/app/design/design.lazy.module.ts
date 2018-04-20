import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignElementsComponent } from './design-elements/design-elements.component';
import { DesignSettingComponent } from './design-setting/design-setting.component';
import { DesignModule } from './design.module';
import { DesignJsonComponent } from './design-json/design-json';
import { DesignCreateComponent } from './design-create/design-create';
@NgModule({
  imports: [CommonModule, DesignModule],
  entryComponents: [
    DesignElementsComponent,
    DesignSettingComponent,
    DesignJsonComponent,
    DesignCreateComponent
  ]
})
export class DesignLazyModule {}
