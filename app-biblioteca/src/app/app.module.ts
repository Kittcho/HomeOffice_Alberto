import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/compartido/nav/nav.component';
import { NavbarComponent } from './components/compartido/navbar/navbar.component';
import { LibroComponent } from './components/libro/libro.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RutaImgPipe } from './pipes/ruta-img.pipe';
import { BuscarLibroComponent } from './components/buscar-libro/buscar-libro.component';
import { BuscarComponent } from './components/compartido/buscar/buscar.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavbarComponent,
    LibroComponent,
    ListaLibrosComponent,
    ListaUsuariosComponent,
    RutaImgPipe,
    BuscarLibroComponent,
    BuscarComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
