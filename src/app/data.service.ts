import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  homes$ = new BehaviorSubject({ loading: true, data: [] });

  constructor(private httpClient: HttpClient) { }

  loadHomes(homeTypeFilters, searchString) {

    // Indicate that homes are loading when loadHomes is called.
    this.homes$.next({ loading: true, data: [] });

    this.httpClient.get<any[]>('assets/homes.json')
      .pipe(
        delay(2000),
        // Filter homes on client side.
        map(homes => {
          if (!homeTypeFilters.length) {
            return homes;
          }
          return homes.filter(home => homeTypeFilters.includes(home.type));
        }),
        // Search homes on client side.
        map(homes => {
          if (!searchString) {
            return homes;
          }
          return homes.filter(home => home.title.toLowerCase().includes(searchString.toLowerCase()));
        })
      )
      .subscribe(homes => {
        this.homes$.next({ loading: false, data: homes });
      });

  }
}
