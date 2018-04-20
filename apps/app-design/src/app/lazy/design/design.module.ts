import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DesignElementsComponent,
  DesignLazyModule,
  DesignSettingComponent,
  DesignCreateComponent,
  DesignJsonComponent
} from '../../design';
@NgModule({
  imports: [CommonModule, DesignLazyModule],
  declarations: []
})
export class DesignModule {
  get(key: string) {
    if (key === 'design-setting') {
      return DesignSettingComponent;
    }
    if (key === 'design-elements') {
      return DesignElementsComponent;
    }
    if (key === 'design-json') {
      return DesignJsonComponent;
    }
    if (key === 'design-create') {
      return DesignCreateComponent;
    }
  }
}
