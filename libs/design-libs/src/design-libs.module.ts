import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LAZY_COMPONENTS } from 'iwe7/lazy-load';
import { Iwe7ButtonDesignModule } from 'iwe7/design-libs/src/iwe7-button';
@NgModule({
  imports: [
    CommonModule,
    Iwe7ButtonDesignModule
  ],
  providers: []
})
export class DesignLibsModule {}
