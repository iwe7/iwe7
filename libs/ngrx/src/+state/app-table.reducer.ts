import { Action } from '@ngrx/store';
import { AppTableActions, AppTableActionTypes } from './app-table.actions';

/**
 * Interface for the 'AppTable' data used in
 *  - AppTableState, and
 *  - appTableReducer
 */
export interface AppTableData {}

/**
 * Interface to the part of the Store containing AppTableState
 * and other information related to AppTableData.
 */
export interface AppTableState {
  readonly appTable: AppTableData;
}

export const initialState: AppTableData = {};

export function appTableReducer(
  state = initialState,
  action: AppTableActions
): AppTableData {
  switch (action.type) {
    case AppTableActionTypes.AppTableAction:
      return state;

    case AppTableActionTypes.AppTableLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
