import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7DesignDirective } from './iwe7-design.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [Iwe7DesignDirective],
  exports: [Iwe7DesignDirective]
})
export class Iwe7DesignModule {}
