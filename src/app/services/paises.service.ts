import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http:HttpClient) { }

  traerDatosPais(pais:string):Observable<any>{

    return this.http.get(`https://restcountries.com/v3.1/name/${pais}`)
  }
}
