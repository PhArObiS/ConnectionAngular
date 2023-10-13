import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

import { MessageComponent } from '../message/message.component';

interface BikeResponse {
  status: string;
  message:string;
  data:any;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent 
{
  public customers:any[];

  constructor(private data: DataService) 
  { 
    this.customers = new Array();
  }

  @ViewChild(MessageComponent) msg!: MessageComponent;  

  ngOnInit()
  {
    this.getCustomers();
  }

  getCustomers()
  {
    console.log("getCustomers");
    this.data.getCustomers().subscribe((response: BikeResponse) => this.getCustomersResponse(response));
  }

  getCustomersResponse(response: BikeResponse)
  {

    console.log("getCustomersResponse");
    console.log(response);

    if (response.status == "failed")
    {
      this.msg.showMessage(response.message);
    }
    else
    {
      this.customers = response.data;
    }

  }

}
