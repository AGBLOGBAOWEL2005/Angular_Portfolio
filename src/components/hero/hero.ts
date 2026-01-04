import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  title = `L'Odyssée Créative`;
  subtitle = 'Accompagner votre croissance par le design et la performance, de la vision stratégique à la réalisation concrète.';
  buttonText = 'Voir mes projets';

  onButtonClick(): void {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
