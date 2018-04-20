import { NgModule } from '@angular/core';
import { NzTimelineModule } from 'iwe7/antd/timeline';
import { TimelineComponent } from './timeline';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, NzTimelineModule, FormsModule, SharedModule],
  declarations: [TimelineComponent],
  entryComponents: [TimelineComponent]
})
export class TimelineModule {
  get(key: string) {
    return TimelineComponent;
  }
}
