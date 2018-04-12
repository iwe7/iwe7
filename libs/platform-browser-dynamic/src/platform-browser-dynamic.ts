import {
  createPlatformFactory,
  platformCore,
  COMPILER_OPTIONS,
  CompilerFactory,
  PlatformRef,
  StaticProvider
} from '@angular/core';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from './providers/internal_browser_dynamic_platform_prividers';
import { JitCompilerFactory } from './classes/jit-compiler-factory';

export const platformCoreDynamic = createPlatformFactory(
  platformCore,
  'coreDynamic',
  [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS]
    }
  ]
);

export const platformBrowserDynamic: (
  extraProviders?: StaticProvider[]
) => PlatformRef = createPlatformFactory(
  platformCoreDynamic,
  'myBrowserDynamic',
  INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS
);
