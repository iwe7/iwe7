import { NgModule } from '@angular/core';

import { NzButtonModule } from 'iwe7/antd/button';
import { NzModalModule } from 'iwe7/antd/modal';
import { NzInputModule } from 'iwe7/antd/input';
import { NzFormModule } from 'iwe7/antd/form';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'iwe7/shared';
import { CodeMirrorPage } from './code-mirror';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule
  ],
  declarations: [CodeMirrorPage],
  entryComponents: [CodeMirrorPage],
  exports: [CodeMirrorPage]
})
export class CodeMirrorModule {
  get(key: string) {
    if (key === 'code-mirror') {
      return CodeMirrorPage;
    }
  }
}
