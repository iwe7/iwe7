import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7DesignDirective } from './iwe7-design.directive';
import { DesignPageComponent } from './design-page/design-page.component';
import { DesignGroupComponent } from './design-group/design-group.component';
import { DesignFormComponent } from './design-form/design-form.component';
import { Iwe7CoreModule } from 'iwe7/core';
import { Iwe7TouchModule } from 'iwe7/touch';

@NgModule({
  imports: [
    CommonModule,
    // 核心功能
    Iwe7CoreModule,
    Iwe7TouchModule
  ],
  declarations: [
    Iwe7DesignDirective,
    DesignPageComponent,
    DesignGroupComponent,
    DesignFormComponent
  ],
  exports: [
    Iwe7DesignDirective,
    DesignPageComponent,
    DesignGroupComponent,
    DesignFormComponent
  ]
})
export class Iwe7DesignModule {}
