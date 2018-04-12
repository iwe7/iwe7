/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { ComponentRef } from "@angular/core";
import { exportNgVar } from "../../dom/util";
import { AngularProfiler } from "./common_tools";

const PROFILER_GLOBAL_NAME = "profiler";

/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @experimental All debugging apis are currently experimental.
 */
export function enableDebugTools<T>(ref: ComponentRef<T>): ComponentRef<T> {
  exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
  return ref;
}

/**
 * Disables Angular tools.
 *
 * @experimental All debugging apis are currently experimental.
 */
export function disableDebugTools(): void {
  exportNgVar(PROFILER_GLOBAL_NAME, null);
}
