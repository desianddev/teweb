import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';

import { SidebarModule } from './sidebar/sidebar.module';
import { SignInComponent } from './account/signin/sign-in.component';
import { SignUpComponent } from './account/signup/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NavbarModule,
    FooterModule,
    AppRoutingModule,
    CommonModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent

  ]
})
export class AppModule { }
