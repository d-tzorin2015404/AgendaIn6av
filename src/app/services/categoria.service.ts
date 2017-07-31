import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class CategoriaService {
    private headers:Headers;
    private url:string;

    constructor(private http:Http, private auth:AuthService){
        this.url = "http://localhost:3000/api/categoria/1";
        let config = {
            'Content-Type': 'application/json',
            'Authorization': this.auth.getToken()
        }
        this.headers = new Headers(config);
    }

    public getCategoria(){
        return this.http.get(this.url, {headers: this.headers}).map(res =>{
            return res.json();
        });
    }
    public buscarCategoria(idCategoria:any) {
    let ruta = "http://localhost:3000/api/categoria/buscar";
    let uri = `${ruta}/${idCategoria}`;

    return this.http.get(uri, { headers: this.headers }).map(res => { return res.json()[0];});

  }


    public nuevaCategoria(categoria:any){
        let data = JSON.stringify(categoria);
        let uri = "http://localhost:3000/api/categoria";
        return this.http.post(uri, data, {headers: this.headers}).map (res => {
            return res.json();
        });

    }

    public updateCategoria(categoria:any){
        let uri = 'http://localhost:3000/api/categoria/';
    let json = JSON.parse(JSON.stringify(categoria));
    console.log(categoria.idCategoria);
    console.log("llego")
    return this.http.put(uri+categoria.idCategoria, json, {headers: this.headers}).map(res => {
      return res.json();
    });
  }

  eliminarCategoria(categoria:any){
      let uri = 'http://localhost:3000/api/categoria/';
    return this.http.delete(uri+categoria.idCategoria).map(res => {
      return res.json();
    });
  }

}
