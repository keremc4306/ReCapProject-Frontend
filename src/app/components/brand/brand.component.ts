import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brand';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-brand',
   templateUrl: './brand.component.html',
   styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
   listAllBrandCss: string = 'text-start list-group-item';
   brands: Brand[] = [];
   currentBrandId: number = 0;
   filterText = '';

   constructor(private brandService: BrandService, private activatedRoute:ActivatedRoute) {}

   ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
      
         if (params['brandId']) {
            this.getBrandsByID(params['brandId'])
         } 
         else {
            this.getBrands();
         }
       });
      
   }

   getBrands() {
      this.brandService.getBrands().subscribe((response) => {
         this.brands = response.data;
         this.filterText = '';
      });
   }

   getBrandsByID(id: string) {
      this.brandService.getBrandsById(id).subscribe((response) => {
         this.brands = [];
         this.brands.push(response.data);
         this.filterText = '';
      });
   }

   setCurrentBrand(brandId: number) {
      this.currentBrandId = brandId;
   }

   getCurrentBrandClass(brandId: number): string {
      if (this.currentBrandId !== brandId) {
         return 'list-group-item list-group-item-action';
      }

      return 'list-group-item list-group-item-action active';
   }

   resetCurrentBrandId() {
      this.currentBrandId = 0;
   }
}
