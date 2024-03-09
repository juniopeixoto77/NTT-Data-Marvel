import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MD5 } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  private publicKey = '396292dc2977f1e956a4cf99614e8d4f';
  private privateKey = '07b20a10cf4481a14dc1532d697df2ca572c3784';
  private baseUrl = 'http://gateway.marvel.com/v1/public/';
  private ts = new Date().getTime().toString();
  
  constructor(private http: HttpClient) { }

  getComics(): Observable<any> {
    // Calcular o hash usando Md5 da biblioteca crypto-js
    const hash = MD5(this.ts + this.privateKey + this.publicKey).toString();
    const url = `${this.baseUrl}comics?ts=${this.ts}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get<any>(url);
    console.log(hash);
  }
}