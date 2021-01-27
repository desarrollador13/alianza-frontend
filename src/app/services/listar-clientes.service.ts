import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarClientesService {

  private host:string='http://localhost:80/api/v1/'
  
  constructor(private http: HttpClient) { }

  registrarCliente(url:string|any, data:object|any) {
    return this.http.post(this.host+url, data);
  }

  obtenerCliente(url:string|any) {
    return this.http.get(this.host+url);
  }

  obtenerClienteId(url:string|any) {
    return this.http.get(this.host+url);
  }
}
