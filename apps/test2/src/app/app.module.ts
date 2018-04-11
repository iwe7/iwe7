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
import { Iwe7LazyLoadModule } from 'iwe7/lazy-load';
import { DesignLibsModule } from 'iwe7/design-libs';
import { Iwe7CoreModule } from 'iwe7/core';
import { Iwe7DesignModule } from 'iwe7/design';
import { RxjsModel } from 'iwe7/rxjs/src/rxjs-model.service';
import { RxjsModule } from 'iwe7/rxjs';
import { Iwe7TouchModule } from 'iwe7/touch';
import { CanvasModule } from 'iwe7/canvas';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    Iwe7ElementsModule,
    Iwe7LazyLoadModule,
    DesignLibsModule,
    Iwe7CoreModule,
    Iwe7DesignModule,
    RxjsModule,
    Iwe7TouchModule,
    CanvasModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {
}
