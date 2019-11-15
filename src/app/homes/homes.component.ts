import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html'
})
export class HomesComponent implements OnInit {

  homeTypeDropdownOpen = false;
  currentHomeTypeFilters = [];
  currentSearch = '';
  homes$ = this.dataService.homes$;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const homeTypeFilters = params['home-type'] || [];
      const search = params.search || '';
      this.dataService.loadHomes(homeTypeFilters, search);
      this.currentHomeTypeFilters = homeTypeFilters;
      this.currentSearch = search;
    });

  }

  homeTypeFilterApplied($event) {

    this.homeTypeDropdownOpen = false;

    const params = this.route.snapshot.queryParams;
    const search = { 'home-type': $event };

    this.router.navigate(['homes'], { queryParams: { ...params, ...search } });

  }

  searchApplied($event) {

    const params = this.route.snapshot.queryParams;
    const search = { search: $event };

    this.router.navigate(['homes'], { queryParams: { ...params, ...search } });

  }

}
