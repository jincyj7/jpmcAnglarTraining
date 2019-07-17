import {Component} from '@angular/core';
import {ICustomer} from './customer';
import {CustomerService} from './customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
    moduleId:module.id,
    templateUrl:'customer-detail.component.html'
})

export class CustomerDetailComponent{
    pageTitle: string = "Customer Detail";
    customer : ICustomer;
    errorMessage: string;

    constructor(private _customerService:CustomerService, private _route: ActivatedRoute, private _router: Router,private _location: Location){
        console.log(2);
    }

    ngOnInit(){
        if(!this.customer){
            let accountNumber = +this._route.snapshot.paramMap.get('accountNumber');
            this.pageTitle +=`: ${accountNumber}`;
            this.getCustomer(accountNumber);
        }
    }
    getCustomer(accountNumber:number){
        this._customerService.getCustomer(accountNumber).subscribe(result => this.customer = result,
            error => this.errorMessage=<any>error);
    }

    onBack(): void{
        // this._router.navigate(['/customers']);
        this._location.back();
    }

    

}