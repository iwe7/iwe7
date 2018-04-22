// 要确保函数的纯性和状态不可变性
import { Action } from '@ngrx/store';
import { AppActive, initialActive } from './active.model';
import { ActiveAction, setActive } from './active.actions';
export function reducer(state = initialActive, action) {
  switch (action.type) {
    case setActive:
      return state;
    default:
      return state;
  }
}
