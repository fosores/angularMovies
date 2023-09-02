import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() titulo: string = '';
  @Input() score: number = 0;
  @Input() premiere: string = '';
  @Input() lasting: string = '';
  @Input() poster: string = '';
  @Output() precio = new EventEmitter<string>();

  emitirPrecio() {
    this.precio.emit(this.titulo);
  }
}
