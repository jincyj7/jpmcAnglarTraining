import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Home/welcome.component';
import { CustomerModule } from './Customers/customer.module';

@NgModule({
  declarations: [
    AppComponent,  
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([      
      {path: 'welcome', component:WelcomeComponent},
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', redirectTo:'welcome', pathMatch:'full'}
    ]),
    CustomerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
