import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private compteUrl = 'http://localhost:8081/api/client'

  constructor(private http: HttpClient) { }

  getAllComptes(id) {
    let data = this.http.get<any>(`${this.compteUrl}/${id}/comptes`);
    return data;
   }
}
