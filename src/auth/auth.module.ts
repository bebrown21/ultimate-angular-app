import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { SharedModule } from "./shared/shared.module";

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule'},
      { path: 'register', loadChildren: './register/register.module#RegisterModule'}
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAVIjbntSfa8YXUUAiKF0zxW-E-8gn7kg8",
  authDomain: "ultimate-angular-fitness-fca69.firebaseapp.com",
  databaseURL: "https://ultimate-angular-fitness-fca69.firebaseio.com",
  projectId: "ultimate-angular-fitness-fca69",
  storageBucket: "ultimate-angular-fitness-fca69.appspot.com",
  messagingSenderId: "454175522787"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}

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
