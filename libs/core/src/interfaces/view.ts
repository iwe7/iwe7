/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { LContainer } from './container';
import {
  ComponentTemplate,
  DirectiveDefList,
  PipeDef,
  PipeDefList
} from './definition';
import { LElementNode, LViewNode, TNode } from './node';
import { LQueries } from './query';
import { Renderer3 } from './renderer';

export interface LView {
  flags: LViewFlags;
  readonly parent: LView | null;
  readonly node: LViewNode | LElementNode;
  readonly id: number;
  readonly renderer: Renderer3;
  bindingStartIndex: number | null;
  cleanup: any[] | null;
  lifecycleStage: LifecycleStage;
  child: LView | LContainer | null;
  tail: LView | LContainer | null;
  next: LView | LContainer | null;
  readonly data: any[];
  directives: any[] | null;
  tView: TView;
  template: ComponentTemplate<{}> | null;
  context: {} | RootContext | null;
  dynamicViewCount: number;
  queries: LQueries | null;
}

export const enum LViewFlags {
  CreationMode = 0b0001,
  CheckAlways = 0b0010,
  Dirty = 0b0100,
  Attached = 0b1000
}

export interface LViewOrLContainer {
  next: LView | LContainer | null;
  child?: LView | LContainer | null;
  views?: LViewNode[];
  parent: LView | null;
}

export interface TView {
  firstTemplatePass: boolean;
  data: TData;
  directives: DirectiveDefList | null;
  directiveRegistry: DirectiveDefList | null;
  pipeRegistry: PipeDefList | null;
  initHooks: HookData | null;
  checkHooks: HookData | null;
  contentHooks: HookData | null;
  contentCheckHooks: HookData | null;
  viewHooks: HookData | null;
  viewCheckHooks: HookData | null;
  destroyHooks: HookData | null;
  pipeDestroyHooks: HookData | null;
  components: number[] | null;
  hostBindings: number[] | null;
}

/**
 * RootContext contains information which is shared for all components which
 * were bootstrapped with {@link renderComponent}.
 */
export interface RootContext {
  /**
   * A function used for scheduling change detection in the future. Usually
   * this is `requestAnimationFrame`.
   */
  scheduler: (workFn: () => void) => void;

  /**
   * A promise which is resolved when all components are considered clean (not dirty).
   *
   * This promise is overwritten every time a first call to {@link markDirty} is invoked.
   */
  clean: Promise<null>;

  /**
   * RootComponent - The component which was instantiated by the call to
   * {@link renderComponent}.
   */
  component: {};
}

/**
 * Array of hooks that should be executed for a view and their directive indices.
 *
 * Even indices: Directive index
 * Odd indices: Hook function
 */
export type HookData = (number | (() => void))[];

/** Possible values of LView.lifecycleStage, used to determine which hooks to run.  */
// TODO: Remove this enum when containerRefresh instructions are removed
export const enum LifecycleStage {
  /* Init hooks need to be run, if any. */
  INIT = 1,

  /* Content hooks need to be run, if any. Init hooks have already run. */
  AFTER_INIT = 2
}

/**
 * Static data that corresponds to the instance-specific data array on an LView.
 *
 * Each node's static data is stored in tData at the same index that it's stored
 * in the data array. Each pipe's definition is stored here at the same index
 * as its pipe instance in the data array. Any nodes that do not have static
 * data store a null value in tData to avoid a sparse array.
 */
export type TData = (TNode | PipeDef<any> | null)[];

// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
export const unusedValueExportToPlacateAjd = 1;
