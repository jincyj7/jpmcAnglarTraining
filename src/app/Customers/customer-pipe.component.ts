import {PipeTransform, Pipe} from  '@angular/core';
import {ICustomer} from './customer';

@Pipe ({
    name:'customerFilter'
})

export class CustomerFilterPipe implements PipeTransform{
    transform(value: ICustomer[],args:string) : ICustomer[]{
        let myresult = args?args:null;

        return myresult ? value.filter ((customer:ICustomer)=> customer.accountNumber.toString().
        indexOf(myresult) != -1) : value;
    }
}