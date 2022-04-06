import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    name: 'Ketan Nakum',
    website: 'www.google.com',
    address: { zip: 361015, city: 'Ahmedabad', country: 'IN' },
    interests: ['Ionic', 'Angular', 'Android', 'Java'],
  };

  constructor(private router: Router, private dataService: DataService) {}

  openDetailsWithQueryParams() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        //passing value in next screen single para and whole object
        // special:'whatever'
        special: JSON.stringify(this.user)
      },
    };
    this.router.navigate(['details'], navigationExtras);
  }
  openDetailsWithService() {
    this.dataService.setData(42, this.user);
    this.router.navigateByUrl('/details/42');
  }
  //route param or state
  openDetailsWithState() {
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
      this.router.navigate(['details'], navigationExtras);
  }

  openDetailsWithParam(){
    this.router.navigateByUrl('/details?filter=color&category=panting');
    }
  openDetailsWithObject(){}
}
