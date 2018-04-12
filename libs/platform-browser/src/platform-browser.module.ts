import {
  NgModule,
  ApplicationModule,
  ErrorHandler,
  ɵAPP_ROOT as APP_ROOT,
  Optional,
  SkipSelf,
  ModuleWithProviders,
  APP_ID,
  RendererFactory2,
  Testability,
  Sanitizer
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BROWSER_SANITIZATION_PROVIDERS } from './providers/browser_sanitization_providers';
import { errorHandler } from './utils/error-handler';
import { DomEventsPlugin } from './classes/dom-events-plugin';
import { KeyEventsPlugin } from './classes/key-events-plugin';
import { HammerGesturesPlugin } from './classes/hammer-gestures-plugin';
import { HammerGestureConfig } from './classes/heammer-gestures-config';

import { EVENT_MANAGER_PLUGINS, HAMMER_GESTURE_CONFIG } from './token';
import { DomRendererFactory2 } from './classes/dom-render-factory2';
import { DomSharedStylesHost } from './classes/dom-shared-styles-host';
import { SharedStylesHost } from './classes/shared-styles-host';
import { EventManager } from './classes/event-manager';
import { Title } from './classes/title';
import { Meta } from './classes/meta';

@NgModule({
  providers: [
    BROWSER_SANITIZATION_PROVIDERS,
    { provide: APP_ROOT, useValue: true },
    { provide: ErrorHandler, useFactory: errorHandler, deps: [] },
    { provide: EVENT_MANAGER_PLUGINS, useClass: DomEventsPlugin, multi: true },
    { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true },
    {
      provide: EVENT_MANAGER_PLUGINS,
      useClass: HammerGesturesPlugin,
      multi: true
    },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
    DomRendererFactory2,
    { provide: RendererFactory2, useExisting: DomRendererFactory2 },
    { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
    DomSharedStylesHost,
    Testability,
    EventManager,
    Meta,
    Title
  ],
  exports: [CommonModule, ApplicationModule]
})
export class PlatformBrowserModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: PlatformBrowserModule
  ) {
    if (parentModule) {
      throw new Error(
        `BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.`
      );
    }
  }
  static withServerTransition(params: { appId: string }): ModuleWithProviders {
    return {
      ngModule: PlatformBrowserModule,
      providers: [
        { provide: APP_ID, useValue: params.appId }
      ]
    };
  }
}
