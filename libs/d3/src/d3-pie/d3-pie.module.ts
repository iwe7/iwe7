import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3PieComponent } from './d3-pie.component';
import { LazyModuleBase } from 'iwe7/lazy-load';
@NgModule({
  imports: [CommonModule],
  declarations: [D3PieComponent],
  entryComponents: [D3PieComponent],
  exports: [D3PieComponent]
})
export class D3PieModule extends LazyModuleBase {
  getComponentByName(key: string) {
    return D3PieComponent;
  }
}
