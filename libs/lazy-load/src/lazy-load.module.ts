import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from '@angular/router';
import { LazyComponentsInterface } from './interface';
import { LazyLoadViewComponent } from './lazy-load-view/lazy-load-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LazyLoadViewComponent],
  exports: [LazyLoadViewComponent]
})
export class Iwe7LazyLoadModule {
  public static forRoot(
    lazyComponents: LazyComponentsInterface[]
  ): ModuleWithProviders {
    return {
      ngModule: Iwe7LazyLoadModule,
      providers: [
        {
          provide: ROUTES,
          useValue: lazyComponents,
          multi: true
        }
      ]
    };
  }
}
