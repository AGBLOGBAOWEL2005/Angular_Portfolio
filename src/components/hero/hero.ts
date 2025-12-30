import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  title = 'Creative Portfolio';
  subtitle = 'We help businesses from new startups to established brands to create digital products that people love.';
  buttonText = 'Voir mes projets';

  onButtonClick(): void {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
