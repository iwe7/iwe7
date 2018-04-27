import { Action } from '@ngrx/store';

export enum AppDataActionTypes {
  AppDataAction = '[AppData] Action',
  // 加载数据
  LoadAppData = '[AppData] Load Data',
  // 数据加载完毕
  AppDataLoaded = '[AppData] Data Loaded'
}

export class AppData implements Action {
  readonly type = AppDataActionTypes.AppDataAction;
}
export class LoadAppData implements Action {
  readonly type = AppDataActionTypes.LoadAppData;
  constructor(public payload: any) {}
}

export class AppDataLoaded implements Action {
  readonly type = AppDataActionTypes.AppDataLoaded;
  constructor(public payload: any) {}
}

export type AppDataActions = AppData | LoadAppData | AppDataLoaded;
