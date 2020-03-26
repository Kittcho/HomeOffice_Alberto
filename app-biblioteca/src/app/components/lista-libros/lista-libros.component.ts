import { Component, OnInit } from '@angular/core';
import { LibrosService, ILibro } from '../../servicios/libros.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  listaLibros: ILibro[];

  constructor( private librosServices: LibrosService,
               private router: Router) {
    this.listaLibros = librosServices.getLibros();
  }

  ngOnInit(): void {
  }
}
