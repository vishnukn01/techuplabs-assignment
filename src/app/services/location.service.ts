import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getCountriesData() {
    return this.http.get<any>('https://api.first.org/data/v1/countries');
  }

  getCountriesByRegion() {}
}
