import { Action } from '@ngrx/store';

export enum AppTableActionTypes {
  AppTableAction = '[AppTable] Action',
  LoadAppTable = '[AppTable] Load Data',
  AppTableLoaded = '[AppTable] Data Loaded'
}

export class AppTable implements Action {
  readonly type = AppTableActionTypes.AppTableAction;
}
export class LoadAppTable implements Action {
  readonly type = AppTableActionTypes.LoadAppTable;
  constructor(public payload: any) {}
}

export class AppTableLoaded implements Action {
  readonly type = AppTableActionTypes.AppTableLoaded;
  constructor(public payload: any) {}
}

export type AppTableActions = AppTable | LoadAppTable | AppTableLoaded;
