import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html'
})
export class HomeSearchComponent implements OnInit {

  form: FormGroup;

  @Input() defaultSearch;
  @Output() applied = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      search: [this.defaultSearch]
    });

    this.form.get('search').valueChanges
      .pipe(debounceTime(250))
      .subscribe(value => {
        this.applied.emit(value);
      });

  }

}
