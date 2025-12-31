import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';
import { Formulaire } from '../components/formulaire/formulaire';
import { Portfolio } from '../components/portfolio/portfolio';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Hero,Formulaire,Portfolio,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_Portfolio');
}
