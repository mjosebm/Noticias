import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  KEY = '0d8c7cdc644b43ed860ead9ccf81a8cf';

  constructor(private http: HttpClient) { }

  getNoticias(parametros:any) : Observable<any>{
  const URL = 'https://newsapi.org/v2/top-headlines?country=' + parametros.pais + '&category=' + parametros.categoria + '&apiKey=' + this.KEY;

  return this.http.get(URL);
  }
}
