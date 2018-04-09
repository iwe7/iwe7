import { InjectionToken } from '@angular/core';
import { LazyComponentsInterface } from './interface';
export const LAZY_COMPONENTS = new InjectionToken<LazyComponentsInterface[]>(
  'LAZY_COMPONENTS',
  {
    providedIn: 'root',
    factory: (): LazyComponentsInterface[] => []
  }
);
