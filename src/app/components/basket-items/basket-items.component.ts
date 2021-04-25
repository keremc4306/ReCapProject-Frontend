import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-basket-items',
  templateUrl: './basket-items.component.html',
  styleUrls: ['./basket-items.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BasketItemsComponent implements OnInit {

  placeholders: any = {number: '•••• •••• •••• ••••', name: 'Full Name', expiry: '••/••', cvc: '•••'};
  messages: any = {validDate: 'valid\ndate', monthYear: 'mm/yyyy'};
  masks: any = undefined;
  cardData: any = {ccNumber: "" , firstName: "", lastName: "" , validNumber: "" , cvc: ""}
  constructor() { }

  ngOnInit(): void {
  }

  onCardFormClick() {
    console.table(this.cardData);
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onCardNumberChange() {
    var value = this.cardData.ccNumber[this.cardData.ccNumber.length - 1];
    
    if(this.cardData.ccNumber && value != ' ') {
      if(this.cardData.ccNumber.length > 0 && this.cardData.ccNumber.length < 16) {
        this.cardData.ccNumber = this.cardData.ccNumber.replaceAll(' ' , '').length % 4 == 0 ? this.cardData.ccNumber + ' ': 
        this.cardData.ccNumber;
      }
    }
  }
}
