import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzTreeNodeComponent } from './nz-tree-node.component';
import { NzTreeComponent } from './nz-tree.component';
import { LazyModuleBase } from 'iwe7/lazy-load';
@NgModule({
  declarations: [NzTreeComponent, NzTreeNodeComponent],
  exports: [NzTreeComponent, NzTreeNodeComponent],
  imports: [CommonModule],
  entryComponents: [NzTreeComponent, NzTreeNodeComponent]
})
export class NzTreeModule extends LazyModuleBase {
  getComponentByName(key: string) {
    if (key === 'nz-tree') {
      return NzTreeComponent;
    }
    if (key === 'nz-tree-node') {
      return NzTreeNodeComponent;
    }
  }
}
