// 要确保函数的纯性和状态不可变性
import { Action } from '@ngrx/store';
import { AppModel, initialApp } from './app.model';
import { AppActionsUnion, updateChildren } from './app.actions';
export function reducer(state = initialApp, action) {
  switch (action.type) {
    case updateChildren:
      console.log(state, action);
      return state;
    default:
      return state;
  }
}
