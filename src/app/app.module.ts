import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
  var config = {
    apiKey: "AIzaSyAVIjbntSfa8YXUUAiKF0zxW-E-8gn7kg8",
    authDomain: "ultimate-angular-fitness-fca69.firebaseapp.com",
    databaseURL: "https://ultimate-angular-fitness-fca69.firebaseio.com",
    projectId: "ultimate-angular-fitness-fca69",
    storageBucket: "ultimate-angular-fitness-fca69.appspot.com",
    messagingSenderId: "454175522787"
  };
*/
