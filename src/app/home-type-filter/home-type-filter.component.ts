import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html'
})
export class HomeTypeFilterComponent implements OnInit {

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

    console.log(formValue);

  }

}
