import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Environment } from 'src/app/core/environment/environment';
import { LoginUser } from 'src/app/core/model/login-user';

import { Response } from 'src/app/core/model/response';
import { User } from 'src/app/core/model/user';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  public user = {} as LoginUser;

  private _userDetails = {} as User;
  
  constructor(private _APIBaseService : BaseService, private _router : Router){
    
  }

  public userLogin(){
    if([null,'', undefined].includes(this.user['email']) || [null,'', undefined].includes(this.user['password'])){
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Please fill all the required fields!'
      });
      return;
    }
    this._APIBaseService.post<any>('auth/login', this.user).subscribe(
      (data:Response) => {
          this._userDetails =  data.data.user;
          this._router.navigate(['/movie-app-dashboard'], { queryParams: this._userDetails});
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Something went wrong! please try again'
        });
      }
    );
  }


  // userRegistration():void {
  //   this._router.navigate(['/vacation4u-registration']);
  // }
}
