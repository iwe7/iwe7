import { Action } from '@ngrx/store';

export const updateChildren = '[app]updateChildren';
export const updateInputs = '[app]updateInputs';

// 更新子级
export class UpdateChildrenAction implements Action {
  readonly type = updateChildren;
}
// 更新inputs
export class UpdateInputsAction implements Action {
  readonly type = updateInputs;
}

export type AppActionsUnion = UpdateChildrenAction | UpdateInputsAction;
