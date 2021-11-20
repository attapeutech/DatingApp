import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //I added this using for API call
    HttpClientModule,
    BrowserAnimationsModule //This added automatically after installed the ngx-bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
