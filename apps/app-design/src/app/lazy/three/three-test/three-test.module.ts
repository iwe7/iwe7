import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'iwe7/shared';
import { ThreeTest } from './three-test';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ThreeTest],
  entryComponents: [ThreeTest]
})
export class ThreeTestModule {
  get(key: string) {
    return ThreeTest;
  }
}
