import { Component } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { UserRegistration } from 'src/app/core/model/user-registration';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import { Response } from 'src/app/core/model/response';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  public userRegisrationDetails = {} as UserRegistration


  constructor(private _APIBaseService : BaseService,) {

  }

  registerUser(){
    this.userRegisrationDetails.role = 'agent';
    this._APIBaseService.post<any>('auth/register',this.userRegisrationDetails).subscribe((data:Response)=> {
      switch (data.code){
        case 200 :
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
        break;

        case 400:
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
        break;
      }
    },
    (error:any)=> {
      if(error.error.code === 422){
        Swal.fire({
          icon: 'error',
          title: 'Error ',
          html: error.error.message.map((element:string) => `<span>${element}</span>`).join('<br>')
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error ',
          text: 'Something went wrong!'
        });
      }
    });

  }
}

