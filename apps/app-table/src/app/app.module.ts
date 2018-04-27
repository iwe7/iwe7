import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'iwe7/shared';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxModule } from 'iwe7/ngrx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([]),
    NxModule.forRoot(),
    NgrxModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
