import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayNameComponent } from './display-name/display-name.component';
const appRoutes:Routes=[
  {
    path:"",component:DisplayNameComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DisplayNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
