import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { LocationDetail } from 'src/app/models/locationDetail';
import { Rental } from 'src/app/models/rental';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { LocationService } from 'src/app/services/location-detail.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
   selector: 'app-car-rent',
   templateUrl: './car-rent.component.html',
   styleUrls: ['./car-rent.component.css'],
})

export class CarRentComponent implements OnInit {

   addRentCarForm: FormGroup;
   carId: number;
   rental: Rental;
   filterText: String;
   locationDetails: LocationDetail[];

   constructor(
      private formBuilder: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private rentalService: RentalService,
      private locationService: LocationService,
      private localStorageService: LocalStorageService,
      private toastrService: ToastrService,
      private router: Router
   ) { }

   ngOnInit(): void {
      this.activatedRoute.params.subscribe(param => {
         this.carId = param.carId;
         this.getLocations();
         this.createAddRentCarForm();
      });
   }

   createAddRentCarForm() {
      this.addRentCarForm = this.formBuilder.group({
         carId: [this.carId, Validators.required],
         locationId: ['', Validators.required],
         rentDate: ["", Validators.required],
         returnDate: ["", Validators.required],
         //customerId: [this.getCurrentCustomer().id, Validators.required]
         customerId: [1, Validators.required],
      });
   }

   checkCarRentable() {
      this.rentalService.getRentalsByCarId(this.carId).subscribe(() => {
         // kontrol istersen yapasın
         this.setRentingCar();
      }, responseError => {
         console.log(responseError);
      });
   }

   setRentingCar() {
      if (this.addRentCarForm.invalid)
         return this.toastrService.warning("Boş alan bırakmayınız", "Dikkat");

      this.rental = this.addRentCarForm.value;
      const currentDate = new Date();
      const rentDate = new Date(this.rental.rentDate);
      const returnDate = new Date(this.rental.returnDate);

      if (rentDate < currentDate)
         return this.toastrService.error("Bu arabayı dün kiralayamazsınız", "Hata");

      if (returnDate <= rentDate)
         return this.toastrService.error("Arabanın dönüş tarihi kiralama tarihinden büyük olmalıdır", "Hata");

      this.rentalService.setRentingCar(this.rental);
      this.toastrService.success("Ödeme sayfasına yönlendiriliyorsunuz", "Yönlendiriliyor");
      this.router.navigateByUrl("/cars/payment");

      return true;
   }

   getLocations() {
      this.locationService.getAll().subscribe(response=>{
         this.locationDetails = response.data;
         console.log(response)
      })
   }

   getCurrentCustomer(): Customer{
      return this.localStorageService.getCurrentCustomer();
   }
}
