import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../shared/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  public resourceUrl = SERVER_API_URL + 'housings';

  constructor(protected http: HttpClient) { }

  query(): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}`, { observe: 'response' });
  }

  findRecents(number: number): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/${number}/recent`, { observe: 'response' });
  }

  save(value: FormData): Observable<any> {
    return this.http.post<any>(`${this.resourceUrl}`, value, { observe: 'response' });
  }

  findOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

 
}
