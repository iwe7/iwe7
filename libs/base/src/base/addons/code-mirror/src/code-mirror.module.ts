import { NgModule } from '@angular/core';

import { NzButtonModule } from 'iwe7/antd/button';
import { NzInputModule } from 'iwe7/antd/input';
import { NzTagModule } from 'iwe7/antd/tag';
import { NzTransferModule } from 'iwe7/antd/transfer';
import { NzMenuModule } from 'iwe7/antd/menu';
import { NzLayoutModule } from 'iwe7/antd/layout';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';

import { CodeMirrorPage } from './code-mirror';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzTransferModule,
    NzMenuModule,
    NzLayoutModule
  ],
  declarations: [CodeMirrorPage],
  entryComponents: [CodeMirrorPage]
})
export class CodeMirrorModule {
  get(key: string) {
    if (key === 'code-mirror') {
      return CodeMirrorPage;
    }
  }
}
