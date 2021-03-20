import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { NavComponent } from './layouts/content-layout/nav/nav.component';

import { AuthModule } from './modules/auth/auth.module';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, ContentLayoutComponent, NavComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
