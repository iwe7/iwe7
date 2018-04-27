import { NgModule } from '@angular/core';
import { SpanComponent } from './span';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SpanComponent],
  entryComponents: [SpanComponent]
})
export class SpanModule {
  get(key: string) {
    return SpanComponent;
  }
}
