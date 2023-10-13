import { Injectable } from '@angular/core';
import { DataService } from './data.service';

interface BikeResponse {
  status: string;
  message:string;
  data:any;
}

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private data: DataService) { }

  private connected:boolean = false;

  isConnected(): Boolean
  {
    return this.connected;
  }

  validateCredentials(user:string, password:string)
  {
    this.data.validateUser(user, password).subscribe((response: BikeResponse) => this.validateCredentialsObserved(response));


    // if (user == 'user' && password == 'password')
    // {
    //   this.connected = true;
    // }
  }

  validateCredentialsObserved(response:BikeResponse)
{
  if (response.status == "success")
  {
    this.connected = true;
  }
  else
  {
    alert(response.message);
  }

}

  disconnect(): void
  {
    this.connected = false;
  }



}
