import { ActionReducerMap } from '@ngrx/store';
import * as app from './app/index';

export interface State {
  // 当前应用树
  app: app.AppModel;
}

export const reducers: ActionReducerMap<State> = {
  app: app.reducer
};
