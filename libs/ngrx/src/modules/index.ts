import { ActionReducerMap } from '@ngrx/store';
import * as app from './app/index';
import * as active from './active/index';

export interface State {
  // 当前应用树
  app: app.AppModel;
  active: active.AppActive;
}

export const reducers: ActionReducerMap<State> = {
  app: app.reducer,
  active: active.initialActive
};
