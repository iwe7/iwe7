import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzTimelineItemComponent } from './nz-timeline-item.component';
import { NzTimelineComponent } from './nz-timeline.component';

@NgModule({
  declarations: [NzTimelineItemComponent, NzTimelineComponent],
  exports: [NzTimelineItemComponent, NzTimelineComponent],
  imports: [CommonModule]
})
export class NzTimelineModule {
  getComponentByName(key: string) {
    if (key === 'nz-timeline') {
      return NzTimelineComponent;
    }
    if (key === 'nz-timeline-item') {
      return NzTimelineItemComponent;
    }
  }
}
