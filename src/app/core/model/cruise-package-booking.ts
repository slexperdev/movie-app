import { CruisePackage } from "./cruise-package";
import { User } from "./user";

export interface CruisePackageBooking {
    user_id:string;
    product_id:string;
    meal_preference:string;
    cabin:string;
    product_type:string;
    product?:CruisePackage;
    user?:User;
}