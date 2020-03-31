import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  recordarUsuario = false;

  constructor( private auth: AuthService,
               private route: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    if ( localStorage.getItem('recordarUsuario') ) {
      this.usuario.correo = localStorage.getItem('recordarUsuario');
      this.recordarUsuario = true;
    }
  }

  EnviaDatos( formLogin: NgForm ) {

    if (formLogin.invalid) {
      return;
    }

    // console.log(formLogin);
    // console.log(this.usuario);

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor..'
    });

    Swal.showLoading();

    this.auth.LogIn( this.usuario ).subscribe(
      (resp) => {
        console.log({resp});

        // Swal.fire({
        //   icon: 'success',
        //   text: 'Datos correctos.'
        // });

        // setTimeout( () => Swal.close() , 1500);

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });

        Toast.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso'
        });

        if ( this.recordarUsuario ) {
          localStorage.setItem('recordarUsuario', this.usuario.correo);
        } else {
          if ( localStorage.getItem('recordarUsuario') ) {
            localStorage.removeItem('recordarUsuario');
          }
        }

        this.route.navigateByUrl('/home');
      },
      (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          text: 'Error al intentar autenticar, favor de revisar sus datos'
        });
      });
  }

}
