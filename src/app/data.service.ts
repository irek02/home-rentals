import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Expose homes stream for components.
  public homes$ = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) { }

  loadHomes(homeTypeFilters) {

    this.homes$.next([]);

    this.httpClient.get<any[]>('assets/homes.json').pipe(
      // Add artificial delay to simulate real HTTP call.
      delay(2000),
      // Simulate that the backend filters homes by type before returning the request.
      map(homes => {
        if (!homeTypeFilters.length) {
          return homes;
        }
        return homes.filter(home => homeTypeFilters.includes(home.type));
      })
    ).subscribe(homes => {
      // Push homes to the homes$ stream.
      this.homes$.next(homes);
    });
  }

}
