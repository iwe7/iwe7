import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PageIndexComponent } from './page-index/page-index.component';

import { TablePageRoutingModule } from './table-page/table-page-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TablePageRoutingModule,
    RouterModule.forRoot([
      {
        path: '**',
        component: PageIndexComponent
      }
    ])
  ],
  declarations: [AppComponent, PageIndexComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
