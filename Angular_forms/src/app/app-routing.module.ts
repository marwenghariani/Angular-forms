import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Challenge3Component } from './challenge3/challenge3.component';
import { Challenge4Component } from './challenge4/challenge4.component';
import { Challenge8Component } from './challenge8/challenge8.component';
import { Challenge5Component } from './challenge5/challenge5.component';


const routes: Routes = [
  {path : "challenge3" , component : Challenge3Component},
  {path : "challenge4" , component : Challenge4Component},
  {path : "challenge5" , component : Challenge5Component},
  {path : "challenge8" , component : Challenge8Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
