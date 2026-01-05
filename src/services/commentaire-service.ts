import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentaireInterf } from '../interface/commentaire-interf';

@Injectable({
  providedIn: 'root',
})
export class CommentaireService {
    private url: string = "http://localhost:3000/commentaire";
    private http = inject(HttpClient);

    addComment(commentaire:CommentaireInterf){
      return this.http.post(this.url,commentaire);
    }
    getallComments(){
      return this.http.get<Array<CommentaireInterf>>(this.url);
    }
  
}
