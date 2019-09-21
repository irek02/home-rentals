import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html'
})
export class HomesComponent implements OnInit {

  homeTypeDropdownOpen = false;

  homes$ = this.dataService.getHomes();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  homeTypeFilterApplied($event) {

    // Hide the filter dropdown
    this.homeTypeDropdownOpen = false;
    // Use router to update the URL by setting the filtering parameters.
    console.log($event);

  }

}
