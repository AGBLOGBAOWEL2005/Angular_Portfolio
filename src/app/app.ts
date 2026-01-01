import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';
import { Portfolio } from '../components/portfolio/portfolio';
import { Footer } from '../components/footer/footer';
import { Connecter } from '../components/connecter/connecter';
import { Formulaire } from '../components/formulaire/formulaire';
import { AjoutProjet } from '../components/ajout-projet/ajout-projet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,AjoutProjet,Formulaire,Connecter,Hero,Portfolio,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_Portfolio');
}
