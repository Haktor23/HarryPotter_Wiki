import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HpApiService {

  private apiUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(`${this.apiUrl}/characters`);
  }

  getSpells(): Observable<any> {
    return this.http.get(`${this.apiUrl}/spells`);
  }

  getTeachers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/spells`);
  }

}