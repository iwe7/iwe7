import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  Injector,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader
} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Iwe7ElementsModule } from 'iwe7/elements';
import { LazyLoadModule } from 'iwe7/lazy-load';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    Iwe7ElementsModule,
    LazyLoadModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {
}
