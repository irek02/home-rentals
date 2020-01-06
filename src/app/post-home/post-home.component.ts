import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html'
})
export class PostHomeComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      home_title: [],
      home_type: [],
      home_image_url: [],
      home_price: [],
      home_amenities: this.formBuilder.group({
        fireplace: [],
        wifi: [],
        heating: [],
        ac: [],
      })
    });
  }

}
