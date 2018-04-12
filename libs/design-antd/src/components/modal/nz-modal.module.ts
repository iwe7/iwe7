import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzButtonModule } from '../button/nz-button.module';
import { LoggerModule } from '../core/util/logger/logger.module';
import { I18nModule as NzI18nModule } from 'iwe7/i18n';

import { CssUnitPipe } from './css-unit.pipe';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalComponent } from './nz-modal.component';
import { NzModalService } from './nz-modal.service';

@NgModule({
  imports: [ CommonModule, OverlayModule, NzI18nModule, NzButtonModule, LoggerModule ],
  exports: [ NzModalComponent ],
  declarations: [ NzModalComponent, CssUnitPipe ],
  entryComponents: [ NzModalComponent ],
  providers: [ NzModalControlService, NzModalService ]
})
export class NzModalModule { }
