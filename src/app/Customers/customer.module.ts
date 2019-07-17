import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customerListComponent } from './customer-list.component';
import { CustomerFilterPipe } from './customer-pipe.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerGuardService } from './customer-guard.service';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'customers', component:customerListComponent},
            {path: 'customers/:accountNumber',canActivate:[CustomerGuardService] ,component:CustomerDetailComponent}          
          ]),
    ],
    declarations:[  
        customerListComponent,
        CustomerFilterPipe,
        CustomerDetailComponent,
    ],
    providers:[CustomerService,
               CustomerGuardService
            ]
})

export class CustomerModule{

}