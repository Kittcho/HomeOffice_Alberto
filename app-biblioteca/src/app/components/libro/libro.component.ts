import { Component, OnInit, Input } from '@angular/core';
import { ILibro } from '../../servicios/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input()
  libros: ILibro[];

  @Input()
  private verPor: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.verPor);
  }

  verDetallePor(): string {
    let respuesta = '';
    if ( this.verPor === 'Titulo' || this.verPor === 'Autor' ) {
      respuesta = 'Titulo';
    } else {
      respuesta = this.verPor;
    }

    return respuesta;
  }

}
