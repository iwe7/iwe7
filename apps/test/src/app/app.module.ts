import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { StatelessModule } from 'iwe7/stateless';
@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), StatelessModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
