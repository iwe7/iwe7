import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseText } from './text';
@NgModule({
  imports: [CommonModule],
  declarations: [BaseText],
  entryComponents: [BaseText]
})
export class BaseTextModule {
  get(key: string) {
    return BaseText;
  }
}
