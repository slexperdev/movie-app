import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login.component';


@NgModule({
  declarations: [UserLoginComponent],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    FormsModule
  ]
})
export class UserLoginModule { }
