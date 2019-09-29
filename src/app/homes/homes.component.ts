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

}
