import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  appDataReducer,
  initialState as appDataInitialState
} from './+state/app-data.reducer';
import { AppDataEffects } from './+state/app-data.effects';
import { PagesModule } from './pages/pages.module';
import {
  appTableReducer,
  initialState as appTableInitialState
} from './+state/app-table.reducer';
import { AppTableEffects } from './+state/app-table.effects';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('appData', appDataReducer, {
      initialState: appDataInitialState
    }),
    StoreModule.forFeature('appTable', appTableReducer, {
      initialState: appTableInitialState
    }),
    EffectsModule.forFeature([AppDataEffects, AppTableEffects]),
    PagesModule,
    HttpClientModule
  ],
  providers: [AppDataEffects, AppTableEffects]
})
export class NgrxModule {}
