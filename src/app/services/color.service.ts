import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})

export class ColorService {

  apiUrl = 'https://localhost:44310/api/colors/';

  constructor(private httpClient: HttpClient) {
  }

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getColorsById(id: number): Observable<ListResponseModel<Color>> {
    let newPath=this.apiUrl+"getbyid?colorId=" + id
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}