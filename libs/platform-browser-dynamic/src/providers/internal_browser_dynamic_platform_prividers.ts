import { ɵPLATFORM_BROWSER_ID } from '@angular/common';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';
import { StaticProvider, COMPILER_OPTIONS, PLATFORM_ID } from '@angular/core';

import { ResourceLoaderImpl } from '../resource_loader/resource_loader_impl';
import { ResourceLoader } from '@angular/compiler';

export const INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS: StaticProvider[] = [
  ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS,
  {
    provide: COMPILER_OPTIONS,
    useValue: {
      providers: [
        { provide: ResourceLoader, useClass: ResourceLoaderImpl, deps: [] }
      ]
    },
    multi: true
  },
  { provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID }
];
