import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MD5 } from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable()
export class MarvelApiService {
  private _baseUrl = 'http://gateway.marvel.com/v1/public/';
  private _ts = new Date().getTime().toString();
  private _limit = 100; 

  constructor(private _http: HttpClient) {}

  getComics(offset: number): Observable<any> {
    const hash = MD5(this._ts + environment.privateKey + environment.publicKey).toString();
    const url = `${this._baseUrl}comics?ts=${this._ts}&apikey=${environment.publicKey}&hash=${hash}&limit=${this._limit}&offset=${offset}`;
    return this._http.get<any>(url);
  }
}
