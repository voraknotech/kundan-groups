import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//Pages
import { KgMainPage } from './pages/kg-main/kg-main.component'

//Services
import { KgBasicServices } from './services/kg-basicServices.service'


@NgModule({
  declarations: [
    AppComponent,
    KgMainPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KgBasicServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
