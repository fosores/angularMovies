import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularMovies';
  precio: string = '';

  cualEsElPrecio(event:string){
    alert(event)
  }
}
