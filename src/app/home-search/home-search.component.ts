import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html'
})
export class HomeSearchComponent implements OnInit {

  @Output() applied = new EventEmitter();

  constructor() { }

  ngOnInit() {

    setTimeout(() => this.applied.emit('foo'), 5000);

  }

}
