import {
  Compiler,
  Injector,
  Type,
  NgModuleFactory,
  ModuleWithComponentFactories,
  ComponentFactory
} from '@angular/core';
import {
  JitCompiler,
  CompileMetadataResolver,
  TemplateParser,
  StyleCompiler,
  ViewCompiler,
  NgModuleCompiler,
  SummaryResolver,
  CompileReflector,
  CompilerConfig,
  ProviderMeta
} from '@angular/compiler';

export class CompilerImpl implements Compiler {
  private _delegate: JitCompiler;
  public readonly injector: Injector;
  constructor(
    injector: Injector,
    private _metadataResolver: CompileMetadataResolver,
    templateParser: TemplateParser,
    styleCompiler: StyleCompiler,
    viewCompiler: ViewCompiler,
    ngModuleCompiler: NgModuleCompiler,
    summaryResolver: SummaryResolver<Type<any>>,
    compileReflector: CompileReflector,
    compilerConfig: CompilerConfig,
    console: Console
  ) {
    this._delegate = new JitCompiler(
      _metadataResolver,
      templateParser,
      styleCompiler,
      viewCompiler,
      ngModuleCompiler,
      summaryResolver,
      compileReflector,
      compilerConfig,
      console,
      this.getExtraNgModuleProviders.bind(this)
    );
    this.injector = injector;
  }

  private getExtraNgModuleProviders() {
    return [
      this._metadataResolver.getProviderMetadata(
        new ProviderMeta(Compiler, { useValue: this })
      )
    ];
  }

  compileModuleSync<T>(moduleType: Type<T>): NgModuleFactory<T> {
    let compileModuleSync = this._delegate.compileModuleSync(
      moduleType
    ) as NgModuleFactory<T>;
    console.log(compileModuleSync);
    return compileModuleSync;
  }
  compileModuleAsync<T>(moduleType: Type<T>): Promise<NgModuleFactory<T>> {
    return this._delegate.compileModuleAsync(moduleType) as Promise<
      NgModuleFactory<T>
    >;
  }
  compileModuleAndAllComponentsSync<T>(
    moduleType: Type<T>
  ): ModuleWithComponentFactories<T> {
    const result = this._delegate.compileModuleAndAllComponentsSync(moduleType);
    return {
      ngModuleFactory: result.ngModuleFactory as NgModuleFactory<T>,
      componentFactories: result.componentFactories as ComponentFactory<any>[]
    };
  }
  compileModuleAndAllComponentsAsync<T>(
    moduleType: Type<T>
  ): Promise<ModuleWithComponentFactories<T>> {
    return this._delegate
      .compileModuleAndAllComponentsAsync(moduleType)
      .then(result => ({
        ngModuleFactory: result.ngModuleFactory as NgModuleFactory<T>,
        componentFactories: result.componentFactories as ComponentFactory<any>[]
      }));
  }
  loadAotSummaries(summaries: () => any[]) {
    this._delegate.loadAotSummaries(summaries);
  }
  hasAotSummary(ref: Type<any>): boolean {
    return this._delegate.hasAotSummary(ref);
  }
  getComponentFactory<T>(component: Type<T>): ComponentFactory<T> {
    return this._delegate.getComponentFactory(component) as ComponentFactory<T>;
  }
  clearCache(): void {
    this._delegate.clearCache();
  }
  clearCacheFor(type: Type<any>) {
    this._delegate.clearCacheFor(type);
  }
}
