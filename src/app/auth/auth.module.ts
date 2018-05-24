import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent, HomeComponent],
  exports: [],
  providers: [AuthService]
})
export class AuthModule { }
