import { Component,ViewChild,ElementRef} from '@angular/core';
import { Formulaire } from '../formulaire/formulaire';

@Component({
  selector: 'app-ajout-projet',
  imports: [Formulaire,],
  templateUrl: './ajout-projet.html',
  styleUrl: './ajout-projet.css',
})
export class AjoutProjet {
  texteDuBouton: string = "+";
  valeur: number=0;
  affichage: string = " invisible opacity-0 fixed pt-[20%] pl-4";
  afficherTexte() {
        this.texteDuBouton = "Ajouter un projet";
  }
  afficherPlus(){
    this.texteDuBouton = "+";
  }
  afficherFormulaire(){
    this.affichage = "z-50  inset-0 bg-black/50 visible opacity-100 fixed py-6 px-[15vh]";
  }
  NotafficherFormulaire(valeur:number){
         if(valeur == 1){
          this.affichage =" invisible opacity-0 fixed pt-[20%] pl-4"; 
         }
  }
}
