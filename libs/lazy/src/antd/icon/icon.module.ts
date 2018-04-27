import { NgModule } from '@angular/core';
import { IconComponent } from './icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [IconComponent],
  entryComponents: [IconComponent]
})
export class IconModule {
  get(key: string) {
    return IconComponent;
  }
}
