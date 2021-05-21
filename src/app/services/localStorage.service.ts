import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
   providedIn: 'root'
})

export class LocalStorageService {

   currentCustomer: string = 'currentCustomer';

   constructor() {
   }

   setCurrentCustomer(currentCustomerValue: Customer) {
      localStorage.setItem(this.currentCustomer, JSON.stringify(currentCustomerValue));
   }

   getCurrentCustomer(): Customer {
      return JSON.parse(localStorage.getItem(this.currentCustomer));
   }

   removeCurrentCustomer() {
      localStorage.removeItem(this.currentCustomer);
   }
}