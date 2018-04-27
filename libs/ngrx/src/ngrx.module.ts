import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  appDataReducer,
  initialState as appDataInitialState
} from './+state/app-data.reducer';
import { AppDataEffects } from './+state/app-data.effects';
import { PagesModule } from './pages/pages.module';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('appData', appDataReducer, {
      initialState: appDataInitialState
    }),
    EffectsModule.forFeature([AppDataEffects]),
    PagesModule
  ],
  providers: [AppDataEffects]
})
export class NgrxModule {}
