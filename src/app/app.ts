import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';
import { Portfolio } from '../components/portfolio/portfolio';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Hero,Portfolio,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_Portfolio');
}
