import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarDetail } from '../../models/carDetail';
import { ActivatedRoute } from '@angular/router';
import { CarFilterComponent } from './car-filter/car-filter.component';
import { CarFilter } from 'src/app/models/carFilter';

@Component({
   selector: 'app-car',
   templateUrl: './car.component.html',
   styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

   carDetail: CarDetail | undefined;
   carDetails: CarDetail[] = [];
   filterText = '';

   constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {
   }

   ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
         if (params['brandId']) {
            let carFilter = {brandId: params['brandId'], colorId: params['colorId']}
            this.getCarsByFiltered(carFilter) 
         }
         else {
            this.getCars();
         }
      })
   }

   getCars() {
      this.carService.getCars().subscribe((response) => {
         this.carDetails = response.data;
      });
   }

   getCarsByBrandId(id: number) {
      this.carService.getCarsByBrandId(id).subscribe((response) => {
         this.carDetails = response.data;
      });
   }

   getCarsByColorId(id: number) {
      this.carService.getCarsByColorId(id).subscribe((response) => {
         this.carDetails = response.data;
      });
   }

   getCarsByBrandIdAndColorId(brandId: number, colorId: number) {
      this.carService.getCarsByBrandId(brandId).subscribe(response => {
         this.carDetails = response.data.filter((carDetail: CarDetail) =>
            carDetail.colorId == colorId
         );
      });
   }

   getCarsByFiltered(carFilter: CarFilter) {
      this.carService.getCarsByFilter(carFilter).subscribe(response => {
         this.carDetails = response.data;
      })
   }
}