import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: any[];

  constructor() { }

  ngOnInit() {
    this.title = 'Customers';
    this.people = [{id: 1, name: 'hadi gharaibeh', city: 'Amman', orderTotal: 12.50, customerSince: new Date (2018, 10, 30)},
      { id: 1, name: 'faris gharaibeh', city: 'Irbid', orderTotal: 6.75, customerSince: new Date(2018, 1, 22) },
      { id: 1, name: 'haya gharaibeh', city: 'Aqaba', orderTotal: 9.30, customerSince: new Date(2017, 7, 6) },
      { id: 1, name: 'Ahmed gharaibeh', city: 'Amman', orderTotal: 20.25, customerSince: new Date(2016, 5, 14) }];
  }

}
