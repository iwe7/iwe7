import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePage } from './page';
@NgModule({
  imports: [CommonModule],
  declarations: [BasePage],
  entryComponents: [BasePage]
})
export class BasePageModule {
  get(key: string) {
    return BasePage;
  }
}
