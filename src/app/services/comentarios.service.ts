import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http:HttpClient) { }

  traerComentarios(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  guardarComentarios(comentario:any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', comentario)
  }
}