import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProjetInterf } from '../interface/projet-interf';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  url: string = "http://localhost:3000/projets";
  private http = inject(HttpClient);

  getall() {
    return this.http.get<Array<ProjetInterf>>(this.url);
  }

  add(projet: ProjetInterf) {
    return this.http.post(this.url, projet);
  }
  getOne(id:number){
    return this.http.get<ProjetInterf>(this.url + '/' + id);
   }
  update(id: number, projet: ProjetInterf) {
    return this.http.put(`${this.url}/${id}`, projet);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
