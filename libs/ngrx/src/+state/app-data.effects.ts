import { Injectable, isDevMode } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  AppDataActions,
  AppDataActionTypes,
  LoadAppData,
  AppDataLoaded
} from './app-data.actions';
import { AppDataState } from './app-data.reducer';
import { DataPersistence } from '@nrwl/nx';
import { map, tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url';

@Injectable()
export class AppDataEffects {
  @Effect() effect$ = this.actions$.ofType(AppDataActionTypes.AppDataAction);

  // 开始加载
  @Effect()
  loadAppData$ = this.dataPersistence.fetch(AppDataActionTypes.LoadAppData, {
    run: (action: LoadAppData, state: AppDataState) => {
      let url = this.url.getUrl('app', { code: action.payload });
      return this.http.get(url).pipe(
        map((res: any) => {
          return new AppDataLoaded(res.data);
        })
      );
    },
    onError: (action: LoadAppData, error) => {
      console.error('Error', error);
    }
  });

  // 加载成功，开始渲染
  @Effect()
  loadedAppData$ = this.dataPersistence.fetch(
    AppDataActionTypes.AppDataLoaded,
    {
      run: (action: AppDataLoaded, state: AppDataState) => {
      },
      onError: (action: AppDataLoaded, error) => {}
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppDataState>,
    private http: HttpClient,
    private url: UrlService
  ) {
  }
}
