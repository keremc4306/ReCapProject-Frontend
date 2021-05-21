import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { LocationDetail } from '../models/locationDetail';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  apiUrl = 'https://localhost:44310/api/locations/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ListResponseModel<LocationDetail>>{
      return this.httpClient.get<ListResponseModel<LocationDetail>>(this.apiUrl);
  }
}