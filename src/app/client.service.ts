import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8081/api/clients';
 


   constructor(private http: HttpClient) { }
 
   getAllClients() {
    let data = this.http.get<any>(`${this.baseUrl}`);
    return data;
   }
   getClient(id: number) {
    let data = this.http.get<any>(`${this.baseUrl}/${id}`);
    return data;
   }
   createClient(client:Object) {
    let data = this.http.post<Object>(`${this.baseUrl}`,client);
    return data;
   }
   updateClient(id: number, value: any) {
    let data = this.http.put<Object>(`${this.baseUrl}/${id}`,value);
    return data;
   }
   deleteClient(id: number) {
    let data = this.http.delete<any>(`${this.baseUrl}/${id}`);
    return data;
   }
   
   }
   

