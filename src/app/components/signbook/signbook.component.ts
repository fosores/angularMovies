import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-signbook',
  templateUrl: './signbook.component.html',
  styleUrls: ['./signbook.component.scss'],
})
export class SignbookComponent {
  escudo:any

  constructor(private formularios: FormBuilder, private paisesService:PaisesService) {}

  pais:FormGroup = this.formularios.group({
    pais:''
  })

  traerPais(){
    this.paisesService.traerDatosPais(this.pais.controls['pais'].value).subscribe({
      next: (respuesta)=>{
        console.log(respuesta)
        this.escudo = respuesta[0].coatOfArms.png
      }
    })
  }







  // ESTO ES EJEMPLO DE COMO USAR FORMULARIOS

  fullName: FormGroup = this.formularios.group({
    nombre: 'Franco',
    apellido: '',
  });

  muestreNombre() {
    console.log(this.fullName.value);
    console.log(this.fullName.controls['nombre'].value);
  }

  seleccion:FormGroup = this.formularios.group({
    opciones: ''
  })

  muestreSeleccion(){
    console.log(this.seleccion.value)
  }
}
