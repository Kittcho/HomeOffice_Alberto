import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILibro, LibrosService } from '../../servicios/libros.service';

@Component({
  selector: 'app-buscar-libro',
  templateUrl: './buscar-libro.component.html',
  styleUrls: ['./buscar-libro.component.css']
})
export class BuscarLibroComponent implements OnInit {

  palabra: string;
  tipoBusqueda: string;

  listaLibros: ILibro[];

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private librosServices: LibrosService ) {
      this.activatedRoute.params.subscribe( params => {
        this.palabra = params.palabra;
        this.tipoBusqueda = params.tipoBusqueda;
        this.BuscarLibros();
      });
   }

  ngOnInit(): void {
    this.BuscarLibros();
  }

  BuscarLibros() {
    switch (this.tipoBusqueda) {
      case 'Titulo':
        this.listaLibros = this.librosServices.getLibrosTitulo( this.palabra );
        break;
      case 'Autor':
        this.listaLibros = this.librosServices.getLibrosAutor( this.palabra );
        break;
      case 'Genero':
        this.listaLibros = this.librosServices.getLibrosGenero( this.palabra );
        break;
      case 'Editorial':
        this.listaLibros = this.librosServices.getLibrosEditorial( this.palabra );
        break;
      default:
        this.router.navigate(['pagina no encontrada']);
        break;
    }

    console.log({'Lista: ' : this.listaLibros });
  }

}
