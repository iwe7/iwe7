import {
  Injector,
  CompilerOptions,
  Compiler,
  CompilerFactory,
  COMPILER_OPTIONS,
  ViewEncapsulation,
  MissingTranslationStrategy,
} from '@angular/core';

import { _mergeOptions } from '../utils/util';
import { COMPILER_PROVIDERS } from '../providers/compiler_providers';
/**
 * jit compiler
 */
export class JitCompilerFactory implements CompilerFactory {
  private _defaultOptions: CompilerOptions[];

  /* @internal */
  constructor(defaultOptions: CompilerOptions[]) {
    const compilerOptions: CompilerOptions = {
      useJit: true,
      // 配置试图
      defaultEncapsulation: ViewEncapsulation.Emulated,
      missingTranslation: MissingTranslationStrategy.Warning
    };
    this._defaultOptions = [compilerOptions, ...defaultOptions];
  }
  createCompiler(options: CompilerOptions[] = []): Compiler {
    const opts = _mergeOptions(this._defaultOptions.concat(options));
    const injector = Injector.create([
      COMPILER_PROVIDERS,
    ]);
    return injector.get(Compiler);
  }
}
