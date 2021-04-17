import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})

export class BrandService {

  apiUrl = 'https://localhost:44310/api/brands/';

  constructor(private httpClient: HttpClient) {
  }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getBrandsById(id: string): Observable<SingleResponseModel<Brand>> {
    let newPath=this.apiUrl+"getbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }
}