import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  AppTableActions,
  AppTableActionTypes,
  LoadAppTable,
  AppTableLoaded
} from './app-table.actions';
import { AppTableState } from './app-table.reducer';
import { DataPersistence } from '@nrwl/nx';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable()
export class AppTableEffects {
  @Effect() effect$ = this.actions$.ofType(AppTableActionTypes.AppTableAction);

  @Effect()
  loadAppTable$ = this.dataPersistence.fetch(AppTableActionTypes.LoadAppTable, {
    run: (action: LoadAppTable, state: AppTableState) => {
      let url = this.url.getUrl('elements/table', { table: action.payload });
      return this.http.get(url).pipe(
        map((res: any) => {
          return new AppTableLoaded(res.data);
        })
      );
    },
    onError: (action: LoadAppTable, error) => {
      console.error('Error', error);
    }
  });

  // 开始渲染字段
  @Effect()
  loadedTableData$ = this.dataPersistence.fetch(
    AppTableActionTypes.AppTableLoaded,
    {
      run: (action: AppTableLoaded, state: AppTableState) => {
        let data = action.payload;
        console.log(data);
      },
      onError: (action: AppTableLoaded, error) => {}
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppTableState>,
    private http: HttpClient,
    private url: UrlService
  ) {}
}
