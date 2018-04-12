import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from 'iwe7/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare const window: any;

let ref1 = platformBrowserDynamic([])
  .bootstrapModule(AppModule)
  .then(res => {
    window.meepo = res;
  })
  .catch(err => console.log(err));
