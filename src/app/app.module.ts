import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DevUIModule} from 'ng-devui';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DevUIModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
