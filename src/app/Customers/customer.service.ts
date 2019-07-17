import { Injectable } from "@angular/core";
import { ICustomer } from "./customer";

import { Http , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class CustomerService {
    // private _dataUrl = "http://bankingcustomers.azurewebsites.net/api/customers";
    private _dataUrl = './assets/data.json';

    constructor(private _http:Http){

    }
    getCustomers(): Observable<ICustomer[]>{
        return this._http.get(this._dataUrl)
        .map((myResponse:Response)=><ICustomer[]>myResponse.json())
        .do(data=> console.log("All:"+JSON.stringify(data)))
        .catch(this.handleError);        
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Service Error");
    }
    
    getCustomer(accountNumber:number) : Observable<ICustomer>{
        return this.getCustomers().map((myCustomers:ICustomer[])=>
        myCustomers.find(p=>p.accountNumber ===accountNumber ));
    }
}