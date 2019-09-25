import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getHomes() {
    return this.httpClient.get('assets/homes.json')
      .pipe(
        delay(2000)
      );
  }
}
