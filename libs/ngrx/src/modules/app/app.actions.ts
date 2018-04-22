import { Action } from '@ngrx/store';

export const setAppStyle = '[app]setAppStyle';
export const updateInputs = '[app]updateInputs';

// 更新子级
export class SetAppStyleAction implements Action {
  readonly type = setAppStyle;
  constructor(public data: any) {}
}
// 更新inputs
export class UpdateInputsAction implements Action {
  readonly type = updateInputs;
}

export type AppActionsUnion = SetAppStyleAction | UpdateInputsAction;
