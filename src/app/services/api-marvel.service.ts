import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MD5 } from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService {
  private _publicKey = '396292dc2977f1e956a4cf99614e8d4f';
  private _privateKey = '07b20a10cf4481a14dc1532d697df2ca572c3784';
  private _baseUrl = 'http://gateway.marvel.com/v1/public/';
  private _ts = new Date().getTime().toString();

  constructor(private _http: HttpClient) {}

  getComics(): Observable<any> {
    const hash = MD5(this._ts + this._privateKey + this._publicKey).toString();
    const url = `${this._baseUrl}comics?ts=${this._ts}&apikey=${this._publicKey}&hash=${hash}`;
    return this._http.get<any>(url);
  }
}
