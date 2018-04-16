import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzMatchMediaService } from 'iwe7/core';

import { NzContentComponent } from './nz-content.component';
import { NzFooterComponent } from './nz-footer.component';
import { NzHeaderComponent } from './nz-header.component';
import { NzLayoutComponent } from './nz-layout.component';
import { NzSiderComponent } from './nz-sider.component';
import { NzLayoutTplComponent } from './nz-layout-tpl';
@NgModule({
  declarations: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzFooterComponent,
    NzSiderComponent,
    NzLayoutTplComponent
  ],
  exports: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzFooterComponent,
    NzSiderComponent,
    NzLayoutTplComponent
  ],
  providers: [NzMatchMediaService],
  imports: [CommonModule],
  entryComponents: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzFooterComponent,
    NzSiderComponent,
    NzLayoutTplComponent
  ]
})
export class NzLayoutModule {
  getComponentByName(key: string) {
    if (key === 'nz-layout') {
      return NzLayoutComponent;
    }
    if (key === 'nz-header') {
      return NzHeaderComponent;
    }
    if (key === 'nz-content') {
      return NzContentComponent;
    }
    if (key === 'nz-footer') {
      return NzFooterComponent;
    }
    if (key === 'nz-sider') {
      return NzSiderComponent;
    }
  }
}
