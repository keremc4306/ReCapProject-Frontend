import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentDetail } from '../models/rentDetail';

@Injectable({
  providedIn: 'root'
})

export class RentalService {

  private apiUrl = 'https://localhost:44310/api/rentals/';
  private rentingCar: Rental;

  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<RentDetail>>{
    let newPath = this.apiUrl + "getrentdetails";
    return this.httpClient.get<ListResponseModel<RentDetail>>(newPath);
  }

  getRentalsByCarId(carId: number): Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "getrentalcarid?carId="+ carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  setRentingCar(rental: Rental){
    this.rentingCar = rental;
  }

  getRentingCar(){
    return this.rentingCar;
  };

  removeRentingCar(){
    this.rentingCar = null;
  }
}