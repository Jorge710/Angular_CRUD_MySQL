import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL: "http://localhost/api/";

  constructor(private http: HttpClient) { }

  obtenerUsuarios(){
    return this.http.get(`${this.URL}ObtenerUsuarios.php`);
  }

  altaUsuarios(){
    return this.http.get(`${this.URL}AltaUsuarios.php`.JSON.string);
  }

}
