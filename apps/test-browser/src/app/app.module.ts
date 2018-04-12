import { NgModule, OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Router } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { TestService } from './test.service';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: Page1Component
      },
      {
        path: 'page1',
        component: Page1Component
      },
      {
        path: 'page2',
        component: Page2Component
      }
    ])
  ],
  declarations: [AppComponent, Page1Component, Page2Component],
  bootstrap: [AppComponent],
  providers: [
    TestService
  ]
})
export class AppModule {
  public constructor(
    public router: Router
  ){}
}
