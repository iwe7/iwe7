import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTestComponent } from './base-test/base-test.component';
import { PipesModule } from 'iwe7/pipes';

@NgModule({
  imports: [CommonModule, PipesModule],
  declarations: [BaseTestComponent],
  exports: [BaseTestComponent],
  entryComponents: [BaseTestComponent]
})
export class CoreModule {}
