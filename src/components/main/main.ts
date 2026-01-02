import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from '../hero/hero';
import { Portfolio } from '../portfolio/portfolio';
import { Connecter } from '../connecter/connecter';
import { Formulaire } from '../formulaire/formulaire';
import { AjoutProjet } from '../ajout-projet/ajout-projet';
import { ProjetInterf } from '../../interface/projet-interf';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet,Hero,Portfolio,Connecter,Formulaire,AjoutProjet],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
projetSelectionne: ProjetInterf | null = null;

  preparerModif(projet: ProjetInterf) {
    this.projetSelectionne = projet;
  }

  resetModif() {
    this.projetSelectionne = null;
  }

}
