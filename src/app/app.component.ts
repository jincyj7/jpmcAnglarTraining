import { Component } from '@angular/core';
import 'rxjs/Rx';
@Component({
  selector: 'piggybank-root',
  // templateUrl: './app.component.html'
  template:`
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <a class="nav-bar-brand">{{pageTitile}}</a>
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['welcome']">Home</a></li>
            <li><a [routerLink]="['customers']">Customer List</a></li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  pageTitle:string = 'The Piggy Bank';
}
