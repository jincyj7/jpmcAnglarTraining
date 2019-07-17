import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { customerListComponent } from './Customers/customer-list.component';
import { CustomerFilterPipe } from './Customers/customer-pipe.component';
import { CustomerService } from './Customers/customer.service';
import { WelcomeComponent } from './Home/welcome.component';
import { CustomerDetailComponent } from './Customers/customer-detail.component';
import { CustomerGuardService } from './Customers/customer-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    customerListComponent,
    CustomerFilterPipe,
    CustomerDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'customers', component:customerListComponent},
      {path: 'customers/:accountNumber',canActivate:[CustomerGuardService] ,component:CustomerDetailComponent},
      {path: 'welcome', component:WelcomeComponent},
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  providers: [CustomerService,CustomerGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
