import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { fakeBackendProvider } from '.././interceptors/fakeBackend';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { RowComponent } from './components/row/row.component';
import { RowHeadComponent } from './components/row-head/row-head.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RowComponent,
    RowHeadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
