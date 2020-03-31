import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarUsuario: false;

  constructor( private auth: AuthService,
               private route: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
   }

   CapturarUsuario( formulario: NgForm ) {

    if (!formulario.valid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor..'
    });

    Swal.showLoading();

    this.auth.SignUp(this.usuario).subscribe( (resp) => {
      console.log(resp);

      Swal.fire({
        icon: 'success',
        text: 'Datos guardados correctamente.'
      });

      if ( this.recordarUsuario ) {
        localStorage.setItem('recordarUsuario', this.usuario.correo);
      }

      setTimeout( () => Swal.close() , 1500);

      this.route.navigateByUrl('/home');

    } , (err) => {
      Swal.fire({
        icon: 'error',
        text: err.error.error.message
      });
    });


   }

}
