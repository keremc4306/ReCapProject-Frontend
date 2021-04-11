import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})

export class BrandService {

  apiUrl = 'https://localhost:44310/api/brands/';

  constructor(private httpClient: HttpClient) {
  }

  // getBrands(): Observable<BrandResponseModel> {
  //   let newPath=this.apiUrl+"getall"
  //   return this.httpClient.get<BrandResponseModel>(newPath);
  // }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}