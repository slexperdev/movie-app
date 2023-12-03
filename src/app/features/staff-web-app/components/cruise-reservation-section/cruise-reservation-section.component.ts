import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CruisePackage } from 'src/app/core/model/cruise-package';
import { Response } from 'src/app/core/model/response';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { Environment } from 'src/app/core/environment/environment';
import { CruisePackageBooking } from 'src/app/core/model/cruise-package-booking';

@Component({
  selector: 'app-cruise-reservation-section',
  templateUrl: './cruise-reservation-section.component.html',
  styleUrls: ['./cruise-reservation-section.component.css'],
  providers: [DatePipe],
})
export class CruiseReservationSectionComponent implements OnInit{


  public allCruisePackages : Array<CruisePackage>  =  [];
  public cruisePackage = {} as CruisePackage;
  public newCruisePackage = {} as CruisePackage;
  public cruiseBookingList: Array<CruisePackageBooking> = [];

  constructor(private _APIBaseService : BaseService, private _router : Router, private datePipe: DatePipe){
    
  }

  formatDate(timestamp: number | null): string {
    if (timestamp === null) {
      return ''; 
    }
    return this.datePipe.transform(timestamp, 'yyyy-MM-dd') || ''; 
  }

  changeDateValue(date:string){
    let result = Date.parse(date); 
  }
  ngOnInit(): void {
   this._getAllCruisePackageData();
   this._getAllBookingData();
   
  }

  private _getAllCruisePackageData(){
    this._APIBaseService.get<any>('cruise').subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this.allCruisePackages = data.data;
      }

    }, (error:any) => {

    });
  }

  viewCruisePackage(id:string){
    // this.cruisePackage.id = undefined;
    this._APIBaseService.get<any>('cruise/'+`${id}`).subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this.cruisePackage = data.data;
      }

    }, (error:any) => {

    });
  }


  updateCruisePackage(id:string){
    this.cruisePackage.id = undefined;
    this._APIBaseService.put<any>('cruise/update/'+`${id}`, this.cruisePackage).subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this._getAllCruisePackageData();
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
      }

    }, (error:any) => {

    });
  }

  deleteCruisePackage(id:string){

    Swal.fire({
      title: 'Please Confirm',
      text: 'Do You Want to Delete This Package?',
      icon:undefined,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this._APIBaseService.delete<any>('cruise/delete/'+`${id}`).subscribe(
          (data:Response) => {
            if(data.code === 200){
              Swal.fire({
                icon: 'success',
                title: data.message
              });
              this._getAllCruisePackageData();
            } else {
              Swal.fire({
                icon: 'warning',
                title: 'Oops! Something went wrong!'
              });
            }
    
          },
          (error) => {
            Swal.fire({
              icon: 'warning',
              title: 'Oops! Something went wrong!'
            });
          }
        );
      }
    })
  }


  addNewCruisePackage(){
    if(this.isAnyPropertyNull(this.newCruisePackage)){
      Swal.fire({
        icon: 'warning',
        title: 'Please complete all the required fields!'
      });
      return;
    }

    this._APIBaseService.post<any>('cruise/new', this.newCruisePackage).subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
         this._getAllCruisePackageData();
      }

    }, (error:any) => {
      if(error.error.code === 422){
        Swal.fire({
          icon: 'error',
          title: 'Error ',
          html: error.error.message.map((element:string) => `<span>${element}</span>`).join('<br>') || error.error.message
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

  resetAddNewCruisePackageForm(){
    this.newCruisePackage = {
      title: '',
      departure_destination: '',
      arrival_destination: '',
      departure_date: 0,
      arrival_date: 0,
      cabin_class: '',
      cruise_duration: 0,
      cruise_provider: '',
      price: 0,
      description:''
    };
  }

   isAnyPropertyNull(obj: any): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && (obj[key] === null || obj[key] === 0)) {
        return true;
      }
    }
    return false;
  }


  private _getAllBookingData(){
    let queryParams = this.convertObjectToUrlParams({product_type : 'cruise', user_id : Environment.userid.id});
    queryParams = '?' + `${queryParams}`
    this._APIBaseService.get<any>('book' + queryParams).subscribe((data: Response) => {
      switch (data.code) {
        case 200:
         this.cruiseBookingList = data.data;
          
      }
    }, (error: any) => {

    });
  }


  private convertObjectToUrlParams(obj: any): string {
    const params: string[] = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (value !== undefined && value !== null) {
          params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
      }
    }
    return params.join('&');
  }
}
