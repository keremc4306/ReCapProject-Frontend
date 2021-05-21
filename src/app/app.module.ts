import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { BasketItemsComponent } from './components/basket-items/basket-items.component';
import {CardModule} from 'ngx-card';
import { CarRentComponent } from './components/car/car-rent/car-rent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    SidebarComponent,
    CustomerComponent,
    ColorComponent,
    BrandComponent,
    CarComponent,
    RentalComponent,
    CarDetailComponent,
    BrandFilterPipe,
    CarFilterPipe,
    ColorFilterPipe,
    CarFilterComponent,
    BasketItemsComponent,
    CarRentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    ReactiveFormsModule,
    FormsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }