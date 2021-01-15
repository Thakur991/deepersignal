import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserListComponent } from './components/userlist/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { layoutComponent } from './layout/layout/layout.component'
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpconfigInterceptor } from './core/interceptors/httpConfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    UserListComponent,
    DashboardComponent,
    layoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpconfigInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }