import {Component} from '@angular/core';
import {ICustomer} from './customer';
import {CustomerService} from './customer.service';

@Component({
    moduleId:module.id,
    selector:'customers',
    templateUrl:'customer-list.component.html',
    styleUrls:['customer-list.component.css']
})

export class customerListComponent{
    pageTile:string = "Customer List"
    imageWidth:number=100;
    imageMargin:number=2;
    showImage:boolean=false;
    listFilter:number;
    customers:ICustomer[];
    errorMessage:string;

    toggleImage():void{
        this.showImage = !this.showImage;
    };
   
    constructor(private _customerService:CustomerService){
        console.log(1);
    }

    ngOnInit() :void{
        console.log('this msg is coming from life cycle hooks');
        this._customerService.getCustomers().subscribe(result => this.customers = result,
            error => this.errorMessage=<any>error);
    }


}