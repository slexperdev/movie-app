import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Environment } from 'src/app/core/environment/environment';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';

@Component({
  selector: 'app-staff-main-dashboard-section',
  templateUrl: './staff-main-dashboard-section.component.html',
  styleUrls: ['./staff-main-dashboard-section.component.css']
})
export class StaffMainDashboardSectionComponent implements OnInit{
  public userName: string = Environment.userid.first_name;

  constructor(private _APIBaseService : BaseService, private _router : Router){

  }
  ngOnInit(): void {
   
  }

  // public currentView:string  = '01';

  

  changeRequestedView(viewId:string){

   // this.currentView = viewId;



  }

  userLogOut() {
    Environment.accessToken =  '';
    this._router.navigate(['/vacation4u-login']);
  }

  
}
