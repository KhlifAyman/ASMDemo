import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiURL = "http://localhost:8000/api/client/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Client[]> {
   return this.httpClient.get<Client[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(client): Observable<Client> {
   return this.httpClient.post<Client>(this.apiURL, JSON.stringify(client), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Client> {
   return this.httpClient.get<Client>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, client): Observable<Client> {
   return this.httpClient.put<Client>(this.apiURL + id, JSON.stringify(client), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Client>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}
