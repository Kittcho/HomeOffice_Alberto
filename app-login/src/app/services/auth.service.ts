import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyDdd_XlojYS149BqNrXWw5Y0IvPDmnRiPk';

  private userToken: string;

  constructor( private httpClient: HttpClient ) {
    this.LeerToken();
   }

  LogIn( usuario: UsuarioModel ) {

    const registro = {
      email: usuario.correo,
      password : usuario.password,
      returnSecureToken: true
    };

    return this.httpClient.post(
      `${ this.url }signInWithPassword?key=${ this.apiKey }`,
      registro
    ).pipe(
      map( resp => {
        this.GuardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  LogOut() {
    localStorage.removeItem('token');
  }

  SignUp( usuario: UsuarioModel ) {

    const registro = {
      email: usuario.correo,
      password : usuario.password,
      returnSecureToken: true
    };

    return this.httpClient.post(
      `${ this.url }signUp?key=${ this.apiKey }`,
      registro
    ).pipe(
      map( resp => {
        this.GuardarToken(resp['idToken']);
        return resp;
      })
    );

  }

  private GuardarToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  LeerToken(): string {
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  EstaAutenticado(): boolean {
    console.log('hola');
    console.log('this.userToken.length', this.userToken.length);
    console.log('this.userToken.length > 2', this.userToken.length > 2);
    return this.userToken.length > 2;
  }
}
