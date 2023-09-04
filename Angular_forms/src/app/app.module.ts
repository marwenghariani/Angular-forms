import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Challenge3Component } from './challenge3/challenge3.component';
import { Challenge4Component } from './challenge4/challenge4.component';
import { Challenge5Component } from './challenge5/challenge5.component';
import { Challenge8Component } from './challenge8/challenge8.component';


@NgModule({
  declarations: [
    AppComponent,
    Challenge3Component,
    Challenge4Component,
    Challenge5Component,
    Challenge8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
