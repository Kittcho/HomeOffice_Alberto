import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';


const routes: Routes = [
  { path: 'libros', component: ListaLibrosComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: '**', redirectTo: 'libros' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
