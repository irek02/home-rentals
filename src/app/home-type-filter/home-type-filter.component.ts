import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html'
})
export class HomeTypeFilterComponent implements OnInit {

  @Output() applied = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      Apartment: [],
      Room: [],
      House: []
    });

  }

  submit(formValue) {

    const homeTypes = Object.keys(formValue).filter(filter => formValue[filter]);

    this.applied.emit(homeTypes);

  }

}
