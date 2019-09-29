import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html'
})
export class HomeTypeFilterComponent implements OnInit {

  @Output() applied = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      Apartment: [],
      Room: [],
      House: []
    });

  }

  submit(formValue) {

    const homeTypes = Object.keys(formValue).filter(item => formValue[item]);

    this.applied.emit(homeTypes);

  }

}
