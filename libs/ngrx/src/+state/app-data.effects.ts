import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  AppDataActions,
  AppDataActionTypes,
  LoadAppData,
  AppDataLoaded
} from './app-data.actions';
import { AppDataState } from './app-data.reducer';
import { DataPersistence } from '@nrwl/nx';
import {} from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable()
export class AppDataEffects {
  @Effect() effect$ = this.actions$.ofType(AppDataActionTypes.AppDataAction);

  @Effect()
  loadAppData$ = this.dataPersistence
    .fetch(AppDataActionTypes.LoadAppData, {
      run: (action: LoadAppData, state: AppDataState) => {
        return new AppDataLoaded(state);
      },
      onError: (action: LoadAppData, error) => {
        console.error('Error', error);
      }
    })
    .pipe();

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppDataState>
  ) {}
}
