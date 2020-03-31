import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { BuscarLibroComponent } from './components/buscar-libro/buscar-libro.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';


const routes: Routes = [
  { path: 'libros', component: ListaLibrosComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'buscar-libros/:tipoBusqueda/:palabra', component: BuscarLibroComponent },
  { path: '', pathMatch: 'full', redirectTo: 'libros' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
