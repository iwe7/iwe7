import { Type } from '@angular/core';
// 核心基础
export abstract class LazyComponentModuleBase {
  public abstract getComponentByName(key: string): Type<any>;
}
export abstract class LazyModuleBase extends LazyComponentModuleBase {}
