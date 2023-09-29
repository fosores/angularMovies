import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  precio: string = '';

  mostrarTitulo: boolean = true;

  //DECLARAR
  desaparecerElTitulo() {
    this.mostrarTitulo = false;
  }

  mostrarElTitulo() {
    this.mostrarTitulo = true;
  }

  filtrarLasDeTerror() {
    this.peliculas = this.peliculas.filter((pelicula) => {
      if (pelicula.rating == 9) {
        return pelicula;
      } else {
        return;
      }
    });
  }

  peliculas = [
    {
      imagen:
        'https://www.lahiguera.net/cinemania/pelicula/9960/tres-cartel-10063.jpg',
      titulo: 'Alien',
      fecha_estreno: '12/10/2022',
      duracion: '',
      genero: 'ficcion',
      rating: 9,
    },
    {
      imagen:
        'https://i.pinimg.com/originals/fd/82/c1/fd82c1116eb734b625552241e00e2a20.png',
      titulo: 'Alien',
      fecha_estreno: '',
      duracion: '01:52:35',
      rating: 7,
      genero: 'terror',
    },
    {
      imagen:
        'https://edit.org/photos/img/blog/nld-cartel-pelicula-poster-cine-editable-online-gratis-personalizable.jpg-840.jpg',
      titulo: 'Alien',
      fecha_estreno: '12/11/2022',
      duracion: '01:52:35',
      genero: 'aventura',
      rating: 2,
    },
    {
      imagen:
        'https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/10/avatar-poster-01-600x886.jpg?resize=600%2C886&quality=50&strip=all&ssl=1',
      titulo: 'Alien',
      fecha_estreno: '12/12/2022',
      duracion: '01:52:35',
      genero: 'terror',
      rating: 1,
    },
  ];

  cualEsElPrecio(event: string) {
    alert(event);
  }
}
