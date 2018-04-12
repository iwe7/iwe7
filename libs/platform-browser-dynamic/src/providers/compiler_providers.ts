import {
  StaticProvider,
  InjectionToken,
  MissingTranslationStrategy,
  Optional,
  Inject,
  Injector,
  Compiler,
  PACKAGE_ROOT_URL,
  TRANSLATIONS,
  TRANSLATIONS_FORMAT,
  ɵConsole as Console
} from '@angular/core';

import {
  CompileReflector,
  ResourceLoader,
  JitSummaryResolver,
  SummaryResolver,
  Lexer,
  Parser,
  HtmlParser,
  CompilerConfig,
  ElementSchemaRegistry,
  I18NHtmlParser,
  TemplateParser,
  NgModuleResolver,
  DirectiveResolver,
  PipeResolver,
  NgModuleCompiler,
  ViewCompiler,
  StyleCompiler,
  CompileMetadataResolver,
  DirectiveNormalizer,
  DomElementSchemaRegistry,
  UrlResolver,
  StaticSymbolCache
} from '@angular/compiler';
import { JitReflector } from '../classes/jit-reflector';

import { _NO_RESOURCE_LOADER } from '../config/_NO_RESOURCE_LOADER';
const baseHtmlParser = new InjectionToken('HtmlParser');
export const ERROR_COLLECTOR_TOKEN = new InjectionToken('ErrorCollector');

import { CompilerImpl } from '../classes/compiler-impl';

export const DEFAULT_PACKAGE_URL_PROVIDER = {
  provide: PACKAGE_ROOT_URL,
  useValue: '/'
};

export const COMPILER_PROVIDERS = <StaticProvider[]>[
  { provide: CompileReflector, useValue: new JitReflector() },
  { provide: ResourceLoader, useValue: _NO_RESOURCE_LOADER },
  { provide: JitSummaryResolver, deps: [] },
  { provide: SummaryResolver, useExisting: JitSummaryResolver },
  { provide: Console, deps: [] },
  { provide: Lexer, deps: [] },
  { provide: Parser, deps: [Lexer] },
  {
    provide: baseHtmlParser,
    useClass: HtmlParser,
    deps: []
  },
  {
    provide: I18NHtmlParser,
    useFactory: (
      parser: HtmlParser,
      translations: string | null,
      format: string,
      config: CompilerConfig,
      console: Console
    ) => {
      translations = translations || '';
      const missingTranslation = translations
        ? config.missingTranslation!
        : MissingTranslationStrategy.Ignore;
      return new I18NHtmlParser(
        parser,
        translations,
        format,
        missingTranslation,
        console
      );
    },
    deps: [
      baseHtmlParser,
      [new Optional(), new Inject(TRANSLATIONS)],
      [new Optional(), new Inject(TRANSLATIONS_FORMAT)],
      [CompilerConfig],
      [Console]
    ]
  },
  {
    provide: HtmlParser,
    useExisting: I18NHtmlParser
  },
  {
    provide: TemplateParser,
    deps: [
      CompilerConfig,
      CompileReflector,
      Parser,
      ElementSchemaRegistry,
      I18NHtmlParser,
      Console
    ]
  },
  {
    provide: DirectiveNormalizer,
    deps: [ResourceLoader, UrlResolver, HtmlParser, CompilerConfig]
  },
  {
    provide: CompileMetadataResolver,
    deps: [
      CompilerConfig,
      HtmlParser,
      NgModuleResolver,
      DirectiveResolver,
      PipeResolver,
      SummaryResolver,
      ElementSchemaRegistry,
      DirectiveNormalizer,
      Console,
      [Optional, StaticSymbolCache],
      CompileReflector,
      [Optional, ERROR_COLLECTOR_TOKEN]
    ]
  },
  DEFAULT_PACKAGE_URL_PROVIDER,
  { provide: StyleCompiler, deps: [UrlResolver] },
  { provide: ViewCompiler, deps: [CompileReflector] },
  { provide: NgModuleCompiler, deps: [CompileReflector] },
  { provide: CompilerConfig, useValue: new CompilerConfig() },
  {
    provide: Compiler,
    useClass: CompilerImpl,
    deps: [
      Injector,
      CompileMetadataResolver,
      TemplateParser,
      StyleCompiler,
      ViewCompiler,
      NgModuleCompiler,
      SummaryResolver,
      CompileReflector,
      CompilerConfig,
      Console
    ]
  },
  { provide: DomElementSchemaRegistry, deps: [] },
  { provide: ElementSchemaRegistry, useExisting: DomElementSchemaRegistry },
  { provide: UrlResolver, deps: [PACKAGE_ROOT_URL] },
  { provide: DirectiveResolver, deps: [CompileReflector] },
  { provide: PipeResolver, deps: [CompileReflector] },
  { provide: NgModuleResolver, deps: [CompileReflector] }
];
