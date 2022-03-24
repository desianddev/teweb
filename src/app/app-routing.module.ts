import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './account/signin/sign-in.component';
import { SignUpComponent } from './account/signup/sign-up.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes = [

  {
    path: '',
    component: HomeLayoutComponent,
    children: [
        {
          path: '',
          loadChildren: () => import('./layouts/home-layout/home-layout.module').then(module => module.HomeLayoutModule)
        }
    ]
  },
  {
    path: 'signin',
    component: SignInComponent
   },
   {
    path: 'signup',
    component: SignUpComponent
   },
  {
    path: '**',
    redirectTo: 'signin'
  }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
