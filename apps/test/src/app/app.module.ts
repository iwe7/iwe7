import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { StatelessModule } from 'iwe7/stateless';
import { SchemaFormModule } from 'iwe7/form';
import { PipesModule } from 'iwe7/pipes';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    StatelessModule,
    SchemaFormModule,
    PipesModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    }
  ]
})
export class AppModule {}
