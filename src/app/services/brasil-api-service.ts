import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City, State } from '../model/brasil.models';

@Injectable({
  providedIn: 'root',
})
export class BrasilApiService {
  private BASE_URL = 'https://brasilapi.com.br/api/'
  constructor(private http:HttpClient){}

  listUfs():Observable<State[]>{
    const path = 'ibge/uf/v1'
    return this.http.get<State[]>(this.BASE_URL + path)
  }

  listCities(uf:string):Observable<City[]>{
    const path = 'ibge/municipios/v1/' + uf
    return this.http.get<City[]>(this.BASE_URL + path)
  }
}
