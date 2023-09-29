import { Component, OnInit } from '@angular/core';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  comentarios:any[] = []
  comentarioAGuardar = {
    userId: '1000',
    id: '1500',
    title: 'Mi comentario',
    body: ' mi comentario es genial'
  }

  constructor(private comentariosService:ComentariosService){}

  ngOnInit(){
    this.comentariosService.traerComentarios().subscribe({
      next: (respuesta)=>{
        console.log(respuesta)
        this.comentarios = respuesta
      }
    })
  }

  guardarComentario(){
    this.comentariosService.guardarComentarios(this.comentarioAGuardar).subscribe({
      next: (respuesta)=>{
        console.log(respuesta)
      }
    })
  }

}
