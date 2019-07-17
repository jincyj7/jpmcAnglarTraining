import {Component} from '@angular/core';
import {ICustomer} from './customer';
import {CustomerService} from './customer.service';
import {ActivatedRoute} from '@angular/router';


@Component({
    moduleId:module.id,
    templateUrl:'customer-detail.component.html'
})

export class CustomerDetailComponent{
    pageTitle: string = "Customer Detail";
    customer : ICustomer;
    errorMessage: string;

    constructor(private _customerService:CustomerService, private _route: ActivatedRoute){
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

    

}