import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetViewRefDirective } from './get-view-ref.directive';
// import { HostClassService } from './host-class.service';
@NgModule({
  imports: [CommonModule],
  declarations: [GetViewRefDirective],
  exports: [GetViewRefDirective],
  providers: []
})
export class Iwe7CoreModule {}
