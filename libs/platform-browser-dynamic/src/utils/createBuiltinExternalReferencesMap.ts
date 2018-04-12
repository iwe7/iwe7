import { Identifiers, ExternalReference } from '@angular/compiler';
import {
  ElementRef,
  NgModuleRef,
  ViewContainerRef,
  ChangeDetectorRef,
  QueryList,
  TemplateRef,
  ɵCodegenComponentFactoryResolver,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  NgModuleFactory,
  ɵcmf,
  ɵmod,
  ɵmpd,
  ɵregisterModuleFactory,
  Injector,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  LOCALE_ID,
  TRANSLATIONS_FORMAT,
  ɵinlineInterpolate,
  ɵinterpolate,
  ɵEMPTY_ARRAY,
  ɵEMPTY_MAP,
  Renderer,
  ɵvid,
  ɵeld,
  ɵand,
  ɵted,
  ɵdid,
  ɵprd,
  ɵqud,
  ɵpad,
  ɵppd,
  ɵpod,
  ɵpid,
  ɵnov,
  ɵncd,
  ɵunv,
  ɵcrt,
  ɵccf,
  ANALYZE_FOR_ENTRY_COMPONENTS,
  SecurityContext
} from '@angular/core';
export function createBuiltinExternalReferencesMap() {
  const map = new Map<ExternalReference, any>();
  map.set(
    Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS,
    ANALYZE_FOR_ENTRY_COMPONENTS
  );
  map.set(Identifiers.ElementRef, ElementRef);
  map.set(Identifiers.NgModuleRef, NgModuleRef);
  map.set(Identifiers.ViewContainerRef, ViewContainerRef);
  map.set(Identifiers.ChangeDetectorRef, ChangeDetectorRef);
  map.set(Identifiers.QueryList, QueryList);
  map.set(Identifiers.TemplateRef, TemplateRef);
  map.set(
    Identifiers.CodegenComponentFactoryResolver,
    ɵCodegenComponentFactoryResolver
  );
  map.set(Identifiers.ComponentFactoryResolver, ComponentFactoryResolver);
  map.set(Identifiers.ComponentFactory, ComponentFactory);
  map.set(Identifiers.ComponentRef, ComponentRef);
  map.set(Identifiers.NgModuleFactory, NgModuleFactory);
  map.set(Identifiers.createModuleFactory, ɵcmf);
  map.set(Identifiers.moduleDef, ɵmod);
  map.set(Identifiers.moduleProviderDef, ɵmpd);
  map.set(Identifiers.RegisterModuleFactoryFn, ɵregisterModuleFactory);
  map.set(Identifiers.Injector, Injector);
  map.set(Identifiers.ViewEncapsulation, ViewEncapsulation);
  map.set(Identifiers.ChangeDetectionStrategy, ChangeDetectionStrategy);
  map.set(Identifiers.SecurityContext, SecurityContext);
  map.set(Identifiers.LOCALE_ID, LOCALE_ID);
  map.set(Identifiers.TRANSLATIONS_FORMAT, TRANSLATIONS_FORMAT);
  map.set(Identifiers.inlineInterpolate, ɵinlineInterpolate);
  map.set(Identifiers.interpolate, ɵinterpolate);
  map.set(Identifiers.EMPTY_ARRAY, ɵEMPTY_ARRAY);
  map.set(Identifiers.EMPTY_MAP, ɵEMPTY_MAP);
  map.set(Identifiers.Renderer, Renderer);
  map.set(Identifiers.viewDef, ɵvid);
  map.set(Identifiers.elementDef, ɵeld);
  map.set(Identifiers.anchorDef, ɵand);
  map.set(Identifiers.textDef, ɵted);
  map.set(Identifiers.directiveDef, ɵdid);
  map.set(Identifiers.providerDef, ɵprd);
  map.set(Identifiers.queryDef, ɵqud);
  map.set(Identifiers.pureArrayDef, ɵpad);
  map.set(Identifiers.pureObjectDef, ɵpod);
  map.set(Identifiers.purePipeDef, ɵppd);
  map.set(Identifiers.pipeDef, ɵpid);
  map.set(Identifiers.nodeValue, ɵnov);
  map.set(Identifiers.ngContentDef, ɵncd);
  map.set(Identifiers.unwrapValue, ɵunv);
  map.set(Identifiers.createRendererType2, ɵcrt);
  map.set(Identifiers.createComponentFactory, ɵccf);
  return map;
}
