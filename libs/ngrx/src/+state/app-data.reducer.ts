import { Action } from '@ngrx/store';
import { AppDataActions, AppDataActionTypes } from './app-data.actions';

/**
 * Interface for the 'AppData' data used in
 *  - AppDataState, and
 *  - appDataReducer
 */
export interface AppDataData {}

/**
 * Interface to the part of the Store containing AppDataState
 * and other information related to AppDataData.
 */
export interface AppDataState {
  readonly appData: AppDataData;
}

export const initialState: AppDataData = {};

export function appDataReducer(
  state = initialState,
  action: AppDataActions
): AppDataData {
  switch (action.type) {
    case AppDataActionTypes.AppDataAction:
      return state;
    case AppDataActionTypes.AppDataLoaded: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
