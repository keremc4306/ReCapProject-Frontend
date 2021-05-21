import { Rental } from "./rental";

export interface RentDetail extends Rental {
   carBrand: string
   carModel: string
   customerFirstName: string
   customerLastName: string
   companyName: string
   location: string
}