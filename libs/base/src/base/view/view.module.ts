import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseView } from './view';
@NgModule({
  imports: [CommonModule],
  declarations: [BaseView],
  entryComponents: [BaseView]
})
export class BaseViewModule {
  get(key: string) {
    return BaseView;
  }
}
