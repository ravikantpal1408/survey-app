import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
