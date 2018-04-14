import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzMentionSuggestionDirective } from './mention-suggestions';
import { NzMentionTriggerDirective } from './mention-trigger';
import { NzMentionComponent } from './mention.component';

const COMPONENTS = [
  NzMentionComponent,
  NzMentionTriggerDirective,
  NzMentionSuggestionDirective
];

@NgModule({
  imports: [CommonModule, FormsModule, OverlayModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class NzMentionModule {
  getComponentByName(key: string) {
    if (key === 'nz-mention') {
      return NzMentionComponent;
    }
    if (key === 'nz-mention-trigger') {
      return NzMentionTriggerDirective;
    }
    if (key === 'nz-mention-suggestion') {
      return NzMentionSuggestionDirective;
    }
  }
}
