// 要确保函数的纯性和状态不可变性
import { Action } from '@ngrx/store';
import { AppModel, initialApp } from './app.model';
import { AppActionsUnion, setAppStyle } from './app.actions';
export function reducer(state = initialApp, action) {
  switch (action.type) {
    case setAppStyle:
      return {
        ...state,
        ...{
          inputs: {
            ...state.inputs,
            styles: action.data
          }
        }
      };
      return state;
    default:
      return state;
  }
}
