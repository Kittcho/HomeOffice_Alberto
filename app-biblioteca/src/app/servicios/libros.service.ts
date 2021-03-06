import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  listaLibros: ILibro[];

  constructor() {
    this.listaLibros = [
      {
        id: 1,
        titulo: 'Y Julia retó a los dioses',
        editorial: 'Editorial Planeta',
        genero: ['Novela histórica',
                 'Antigua Roma',
                 'Novela histórica',
                 'General novela histórica',
                 'Novela contemporánea',
                 'General Novela'],
        autor: ['Santiago Posteguillo'],
        anio: 1990,
        num_existencia: 5,
        num_stock: 2,
        img: 'portada_y-julia-reto-a-los-dioses_santiago-posteguillo_202001150940.jpg'
      },
      {
        id: 2,
        titulo: 'El heredero',
        editorial: 'Espasa',
        genero: [
          'Novela literaria',
          'General narrativa literaria',
          'Novela histórica',
          'Guerra Civil Española (1936-1939)',
          'Novela romántica',
          'Novela Romántica contemporánea'],
        autor: ['Rafael Tarradas Bultó'],
        anio: 2005,
        num_existencia: 3,
        num_stock: 2,
        img: 'portada_el-heredero_rafael-tarradas-bulto_201911041200.jpg'
      },
      {
        id: 3,
        titulo: 'La psicóloga',
        editorial: 'Editorial Planeta',
        genero: [
          'Novela contemporánea',
          'General Novela',
          'Novela negra',
          'Thriller'
        ],
        autor: ['Helene Flood'],
        anio: 2008,
        num_existencia: 10,
        num_stock: 5,
        img: 'portada_la-psicologa_helene-flood_201911270859.jpg'
      },
      {
        id: 4,
        titulo: 'La madre de Frankenstein',
        editorial: 'Tusquets Editores S.A.',
        genero: [
          'Novela literaria',
          'General narrativa literaria',
          'Colección: Andanzas',
          'Serie Episodios de una guerra'
        ],
        autor: ['Almudena Grandes'],
        anio: 2000,
        num_existencia: 6,
        num_stock: 2,
        img: 'portada_la-madre-de-frankenstein_almudena-grandes_201912021812.jpg'
      },
      {
        id: 5,
        titulo: 'Alegría',
        editorial: 'Editorial Planeta',
        genero: [
          'Novela contemporánea',
          'General Novela'
        ],
        autor: ['Manuel Vilas'],
        anio: 1997,
        num_existencia: 5,
        num_stock: 5,
        img: 'portada_alegria_manuel-vilas_201910211145.jpg'
      },
      {
        id: 6,
        titulo: 'Patria',
        editorial: 'MaxiTusquets',
        genero: [
          'Novela literaria',
          'General narrativa literaria'
        ],
        autor: ['Fernando Aramburu'],
        anio: 2015,
        num_existencia: 8,
        num_stock: 8,
        img: 'portada_patria_fernando-aramburu_201906211932.jpg'
      },
      {
        id: 7,
        titulo: 'La sospecha de Sofía',
        editorial: 'Editorial Planeta',
        genero: [
          'Novela contemporánea',
          'General Novela'
        ],
        autor: [
          'Paloma Sánchez'
        ],
        anio: 2020,
        num_existencia: 2,
        num_stock: 2,
        img: 'portada_la-sospecha-de-sofia_paloma-sanchez-garnica_201903151336.jpg'
      },
      {
        id: 8,
        titulo: 'El cosmos de la mente',
        editorial: 'Tusquets Editores S.A.',
        genero: [
          'Ciencia',
          'Cosmología'
        ],
        autor: [
          'Edoardo Boncinelli',
          'Antonio Ereditato'
        ],
        anio: 2010,
        num_existencia: 5,
        num_stock: 5,
        img: 'portada_el-cosmos-de-la-mente_edoardo-boncinelli_201912311207.jpg'
      },
      {
        id: 9,
        titulo: 'Superpotencias de la inteligencia artificial',
        editorial: 'Deusto',
        genero: [
          'Ciencia',
          'Tecnología',
          'Actualidad',
          'General actualidad'
        ],
        autor: ['Kai Fu Lee'],
        anio: 1987,
        num_existencia: 10,
        num_stock: 10,
        img: 'portada_superpotencias-de-la-inteligencia-artificial_kai-fu-lee_201911251758.jpg'
      },
      {
        id: 10,
        titulo: 'El sueño del neandertal',
        editorial: 'Editorial Crítica',
        genero: [
          'Ciencia',
          'Evolución'
        ],
        autor: ['Clive Finlayson'],
        anio: 2019,
        num_existencia: 4,
        num_stock: 4,
        img: 'portada_el-sueno-del-neandertal_clive-finlayson_201911121023.jpg'
      }
    ];
  }

  getLibros() {
    return this.listaLibros;
  }

  getLibrosTitulo( titulo: string ): ILibro[] {
    return this.listaLibros.filter( libro =>  {
      console.log({ libro });
      console.log({ titulo });

      return libro.titulo.toLowerCase().indexOf(titulo.toLowerCase()) >= 0;
    });
  }

  getLibrosAutor( autor: string ) {
    return this.listaLibros.filter( libro =>  {
      return libro.autor.find( autorItem => {
        console.log({autorItem});
        console.log(autorItem.toLowerCase().indexOf(autor.toLowerCase()));
        return autorItem.toLowerCase().indexOf(autor.toLowerCase()) >= 0;
      });
    });
  }

  getLibrosGenero( genero: string ) {
    return this.listaLibros.filter( libro =>  {
      return libro.genero.find( generoItem => {
        console.log({generoItem});
        console.log(generoItem.toLowerCase().indexOf(genero.toLowerCase()));
        return generoItem.toLowerCase().indexOf(genero.toLowerCase()) >= 0;
      });
    });
  }

  getLibrosEditorial( editorial: string ) {
    return this.listaLibros.filter( libro =>  {
      console.log(libro.editorial);
      console.log(libro.editorial.toLowerCase().indexOf(editorial.toLowerCase()));
      return libro.editorial.toLowerCase().indexOf(editorial.toLowerCase()) >= 0;
    });
  }
}

export interface ILibro {
  id: number;
  titulo: string;
  editorial: string;
  genero: string[];
  autor: string[];
  anio: number;
  num_existencia: number;
  num_stock: number;
  img: string;
}
