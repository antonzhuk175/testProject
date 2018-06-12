import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
     
    addPhone(title: string, price: number, company: string){
        this.phones.push(new Phone(title, price, company));
    }
}

export class Phone{
  constructor(public title: string, 
              public price: number, 
              public company: string)
  { }
}