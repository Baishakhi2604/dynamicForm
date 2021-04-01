import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  API_URL = 'http://localhost:3000/v1/dynamicform/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private httpClient: HttpClient, public router: Router){}

  getschema(){
    return this.httpClient.get(`${this.API_URL}/getschema`)
  }

  setdata(data) {
    return this.httpClient.post<any>(`${this.API_URL}/insertvalues`, data);
  }

}
