import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';

@Component({
   selector: 'app-color',
   templateUrl: './color.component.html',
   styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

   listAllBrandCss: string = 'text-start list-group-item';
   colors: Color[] = [];
   currentColorId: number = 0;
   filterText = ""

   constructor(private colorService: ColorService, private rooter:Router, private activatedRoute:ActivatedRoute) {
   }

   ngOnInit(): void {
      this.getColors();
      this.activatedRoute.params.subscribe((params) => {
         if (params['id']) {
            this.getColorsById(params['id'])
         } 
         else {
            this.getColors()
         }
       });
   }

   getColors() {
      this.colorService.getColors().subscribe((response) => {
         this.colors = response.data;
      });
   }

   getColorsById(id: number) {
      this.colorService.getColorsById(id).subscribe((response) => {
         this.colors = response.data;
      });
   }

   setCurrentColor(colorId: number) {
      this.currentColorId = colorId;
      this.rooter.navigate(["/cars/color/" + colorId])
      this.filterText = ''
   }

   getCurrentColorClass(colorId: number): string {
      if (this.currentColorId == colorId) {
         return 'list-group-item list-group-item-action active';
      }

      return 'list-group-item list-group-item-action';
   }

   resetCurrentColor(){
      this.currentColorId = 0
   }
}