import { NgModule, NgZone } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { StatelessModule } from 'iwe7/stateless';
import { SchemaFormModule } from 'iwe7/form';
import { PipesModule } from 'iwe7/pipes';
import { Iwe7CoreModule } from 'iwe7/core';
import { RamdaComponent } from './ramda/ramda.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    StatelessModule,
    SchemaFormModule,
    PipesModule,
    Iwe7CoreModule,
    RouterModule.forRoot([
      {
        path: '',
        component: RamdaComponent
      },
      {
        path: 'lazy',
        loadChildren: './lazy/lazy.module#LazyModule'
      }
    ])
  ],
  declarations: [AppComponent, RamdaComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    }
  ]
})
export class AppModule {}
