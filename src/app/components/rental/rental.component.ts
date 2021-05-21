import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentDetail } from 'src/app/models/rentDetail';
import { RentalService } from '../../services/rental.service';

@Component({
   selector: 'app-rental',
   templateUrl: './rental.component.html',
   styleUrls: ['./rental.component.css']
})

export class RentalComponent implements OnInit {

   rentDetails: RentDetail[] = [];

   constructor(private rentalService: RentalService) {
   }

   ngOnInit(): void {
      this.getRentals();
   }

   getRentals() {
      this.rentalService.getRentals().subscribe((response) => {
         this.rentDetails = response.data;
      });
   }
}