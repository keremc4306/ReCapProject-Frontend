import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  apiUrl = 'https://localhost:44310/api/cars/';

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath=this.apiUrl + 'getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarById(id: number): Observable<ListResponseModel<CarDetail>> {
    let newPath=this.apiUrl + 'getbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrandId(id: number): Observable<ListResponseModel<CarDetail>> {
    let newPath=this.apiUrl + 'getbybrand?brandId=' + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColorId(id: number): Observable<ListResponseModel<CarDetail>> {
    let newPath=this.apiUrl + 'getbycolor?colorId=' + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}