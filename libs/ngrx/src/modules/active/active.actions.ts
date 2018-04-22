import { Action } from '@ngrx/store';

export const setActive = '[app active] set';

// 更新子级
export class SetActiveAction implements Action {
  readonly type = setActive;
  constructor(public data: any) {}
}

export type ActiveAction = SetActiveAction;
