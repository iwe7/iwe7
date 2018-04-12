import { CompilerOptions } from '@angular/core';

export function _mergeOptions(optionsArr: CompilerOptions[]): CompilerOptions {
  return {
    useJit: _lastDefined(optionsArr.map(options => options.useJit)),
    defaultEncapsulation: _lastDefined(
      optionsArr.map(options => options.defaultEncapsulation)
    ),
    providers: _mergeArrays(optionsArr.map(options => options.providers!)),
    missingTranslation: _lastDefined(
      optionsArr.map(options => options.missingTranslation)
    ),
    preserveWhitespaces: _lastDefined(
      optionsArr.map(options => options.preserveWhitespaces)
    )
  };
}

export function _lastDefined<T>(args: T[]): T | undefined {
  for (let i = args.length - 1; i >= 0; i--) {
    if (args[i] !== undefined) {
      return args[i];
    }
  }
  return undefined;
}

export function _mergeArrays(parts: any[][]): any[] {
  const result: any[] = [];
  parts.forEach(part => part && result.push(...part));
  return result;
}
