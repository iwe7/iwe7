import { NgModule } from '@angular/core';

import { NewCasePage } from './new-case';
import { NewCaseItemComponent } from './new-case-item/new-case-item';
import { NewCaseSearchComponent } from './new-case-search/new-case-search';
import { NewCaseFilterComponent } from './new-case-filter/new-case-filter';

import { NzButtonModule } from 'iwe7/antd/button';
import { NzInputModule } from 'iwe7/antd/input';
import { NzTagModule } from 'iwe7/antd/tag';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';

@NgModule({
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NzTagModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    NewCaseItemComponent,
    NewCaseSearchComponent,
    NewCaseFilterComponent,
    NewCasePage
  ],
  entryComponents: [NewCasePage, NewCaseItemComponent]
})
export class NewCaseModule {
  get(key: string) {
    if (key === 'new-case') {
      return NewCasePage;
    }
    if (key === 'new-case-item') {
      return NewCaseItemComponent;
    }
  }
}
