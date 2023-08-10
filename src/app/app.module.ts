import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkHistoryModule } from './work-history/work-history.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WorkHistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
