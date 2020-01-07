import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html'
})
export class PostHomeComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      home_title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      home_type: ['house'],
      home_price: ['', [Validators.pattern('^[0-9]*$'), Validators.min(100), Validators.max(5000)]],
      home_amenities: this.formBuilder.group({
        fireplace: [],
        wifi: [],
        heating: [],
        ac: [],
      })
    });
  }

  get homeTitle() { return this.form.get('home_title'); }

  get homeType() { return this.form.get('home_type'); }

  get homePrice() { return this.form.get('home_price'); }

}
