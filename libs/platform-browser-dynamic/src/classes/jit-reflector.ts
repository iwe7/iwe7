import {
  CompileReflector,
  getUrlScheme,
  syntaxError,
  ExternalReference
} from '@angular/compiler';
import {
  ɵReflectionCapabilities as ReflectionCapabilities,
  Component,
  ɵstringify as stringify
} from '@angular/core';

import { createBuiltinExternalReferencesMap } from '../utils/createBuiltinExternalReferencesMap';
export const MODULE_SUFFIX = '';
const builtinExternalReferences = createBuiltinExternalReferencesMap();

export class JitReflector implements CompileReflector {
  private reflectionCapabilities: ReflectionCapabilities;
  constructor() {
    this.reflectionCapabilities = new ReflectionCapabilities();
  }
  parameters(typeOrFunc: any): any[][] {
    let parameters = this.reflectionCapabilities.parameters(typeOrFunc);
    return parameters;
  }
  annotations(typeOrFunc: any): any[] {
    return this.reflectionCapabilities.annotations(typeOrFunc);
  }
  shallowAnnotations(typeOrFunc: any): any[] {
    throw new Error('Not supported in JIT mode');
  }
  tryAnnotations(typeOrFunc: any): any[] {
    return this.annotations(typeOrFunc);
  }
  // metadata
  propMetadata(
    typeOrFunc: any
  ): {
    [key: string]: any[];
  } {
    let propMetadata = this.reflectionCapabilities.propMetadata(typeOrFunc);
    return propMetadata;
  }
  // 生命周期检测
  hasLifecycleHook(type: any, lcProperty: string): boolean {
    let hasLifecycleHook = this.reflectionCapabilities.hasLifecycleHook(
      type,
      lcProperty
    );
    return hasLifecycleHook;
  }
  // 解析路由守卫
  guards(
    typeOrFunc: any
  ): {
    [key: string]: any;
  } {
    const guards = this.reflectionCapabilities.guards(typeOrFunc);
    return guards;
  }
  // 获取component module 路径
  componentModuleUrl(type: any, cmpMetadata: Component): string {
    const moduleId = cmpMetadata.moduleId;
    if (typeof moduleId === 'string') {
      const scheme = getUrlScheme(moduleId);
      return scheme ? moduleId : `package:${moduleId}${MODULE_SUFFIX}`;
    } else if (moduleId !== null && moduleId !== void 0) {
      throw syntaxError(
        `moduleId should be a string in "${stringify(type)}". `
      );
    }
    let url = `./${stringify(type)}`;
    return url;
  }
  // 解析外部引用
  resolveExternalReference(ref: ExternalReference): any {
    let resolveExternalReference =
      builtinExternalReferences.get(ref) || ref.runtime;
    return resolveExternalReference;
  }
}
