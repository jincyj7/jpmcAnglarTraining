import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'

@Injectable()

export class CustomerGuardService{
    constructor(private _router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot): boolean{
        let accountNumber = + route.url[1].path;
        if(isNaN(accountNumber)|| accountNumber.toString().length <10){
            alert("Invalid acc num");
            this._router.navigate(['/customers']);
            return false
        }
        return true;
    }
}