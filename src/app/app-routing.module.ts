import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { BasketItemsComponent } from './components/basket-items/basket-items.component';

const routes: Routes = [
   //{ path: '', component: CarComponent},
   { path: '', component: BasketItemsComponent},
   { path: 'rentals', component: RentalComponent },
   { path: 'customers', component: CustomerComponent },
   { path: 'cars', component: CarFilterComponent },
   { path: 'cars/filter/:brandId/:colorId', component: CarComponent },
   { path: 'cars/detail/:carId', component: CarDetailComponent },
   { path: 'brands', component: BrandComponent },
   { path: 'colors', component: ColorComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule {
}