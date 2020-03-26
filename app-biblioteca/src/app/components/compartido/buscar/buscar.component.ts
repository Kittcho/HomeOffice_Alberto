import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  tipoBusqueda: string;

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.tipoBusqueda = 'Titulo';
  }

  BuscarLibro( palabra: string, tipoBusqueda: string = 'vacio' ) {

    if (tipoBusqueda !== 'vacio') {
      this.tipoBusqueda = tipoBusqueda;
    }

    if ( palabra ) {
      this.router.navigate(['/buscar-libros', this.tipoBusqueda, palabra]);
    } else {
      this.router.navigate(['/libros']);
    }

    console.log({ palabra });
    console.log(this.tipoBusqueda);

  }
}
