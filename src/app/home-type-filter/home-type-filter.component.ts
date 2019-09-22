import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html'
})
export class HomeTypeFilterComponent implements OnInit {

  @Input() defaultFilters = [];
  @Output() applied = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      Apartment: [this.defaultFilters.includes('Apartment')],
      Room: [this.defaultFilters.includes('Room')],
      House: [this.defaultFilters.includes('House')]
    });

  }

  submit(formValue) {

    const homeTypes = Object.keys(formValue).filter(filter => formValue[filter]);

    this.applied.emit(homeTypes);

  }

}
