import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../servicios/libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  listaLibros: any[];
  constructor( private librosServices: LibrosService ) {
    this.listaLibros = librosServices.getLibros();
  }

  ngOnInit(): void {
  }

}
