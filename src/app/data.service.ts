import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  homes$ = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) { }

  loadHomes() {
    this.httpClient.get<any[]>('assets/homes.json')
      .pipe(
        delay(2000)
      )
      .subscribe(homes => {
        this.homes$.next(homes);
      });
  }
}
