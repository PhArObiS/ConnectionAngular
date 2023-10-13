import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface BikeResponse {
  status: string;
  message: string;
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private port: number = 7119;

  validateUser(user: string, password: string): Observable<BikeResponse> {
    let method: string = 'validateUser';
    let parameters = { parameters: [user, password] };

    let urlToCall: string =
      'https://localhost:' +
      this.port.toString() +
      '/BikeStores?method=' +
      method +
      '&parameters=' +
      JSON.stringify(parameters);

    return this.http.get<BikeResponse>(urlToCall);
  }

  getCustomers(): Observable<BikeResponse> {
    let method: string = 'getCustomers';
    let parameters = { parameters: [] };

    let urlToCall: string =
      'https://localhost:' +
      this.port.toString() +
      '/BikeStores?method=' +
      method +
      '&parameters=' +
      JSON.stringify(parameters);

    return this.http.get<BikeResponse>(urlToCall);
  }
}
