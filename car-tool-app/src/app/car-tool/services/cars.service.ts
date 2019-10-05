import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { ICar } from '../models/ICar';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  private getCollectionUrl() {
    return `${environment.apiUrl}/cars`;
  }

  private getMemberUrl(resourceId: number) {
    return `${environment.apiUrl}/cars/${encodeURIComponent(resourceId.toString())}`;
  }

  all() {
    return this.httpClient.get<ICar[]>(this.getCollectionUrl());
  }

  one(carId: number) {
    return this.httpClient.get<ICar>(this.getMemberUrl(carId));
  }

  append(car: ICar) {
    return this.httpClient.post<ICar>(this.getCollectionUrl(), car);
  }

  replace(car: ICar) {
    return this.httpClient.put<ICar>(this.getMemberUrl(car.id), car);
  }

  delete(carId: number) {
    return this.httpClient.delete<ICar>(this.getMemberUrl(carId));
  }
}
