import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-a-propos',
  imports: [CommonModule],
  templateUrl: './a-propos.html',
  styleUrl: './a-propos.css',
})
export class APropos {
   skills = [
    { name: 'Développement Front-end (Angular)', level: 95, color: '#007bff' },
    { name: 'Intégration & Design System', level: 90, color: '#007bff' },
    { name: 'Administration Réseau', level: 85, color: '#007bff' }
  ];

}



