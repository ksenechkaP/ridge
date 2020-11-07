import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonBuilderComponent } from './components/json-builder/json-builder.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JsonItemComponent } from './components/json-item/json-item.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonBuilderComponent,
    JsonItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
