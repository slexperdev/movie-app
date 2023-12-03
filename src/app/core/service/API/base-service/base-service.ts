import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Environment } from 'src/app/core/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private _environment = Environment; 


  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this._environment.accessToken}`
    });
    return headers;
  }

  get<T>(endpoint: string): Observable<T> {
    const url = `${this._environment.apiBaseURL}/${endpoint}`;
    return this.http.get<T>(url, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  getPromise<T>(endpoint: string): Promise<T> {
    const url = `${this._environment.apiBaseURL}/${endpoint}`;
    const headers = this.getHeaders();

    return this.http.get<T>(url, { headers })
      .toPromise()
      .then(data => {
        if (data === undefined) {
          throw new Error('Data not found');
        }
        return data;
      })
      .catch(error => {
        throw new Error('An error occurred while fetching data');
      });
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this._environment.apiBaseURL}/${endpoint}`;
    return this.http.post<T>(url, data, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }


  put<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this._environment.apiBaseURL}/${endpoint}`;
    return this.http.put<T>(url, data, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }


  delete<T>(endpoint: string): Observable<T> {
    const url = `${this._environment.apiBaseURL}/${endpoint}`;
    return this.http.delete<T>(url, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(error);
  }
}
