import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { FormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration.component';


@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    FormsModule
  ]
})
export class UserRegistrationModule { }
