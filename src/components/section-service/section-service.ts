import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-service',
  imports: [CommonModule],
  templateUrl: './section-service.html',
})
export class SectionService {
  services = [
    {
      title: 'Développement Front-end',
      description: "Interfaces réactives avec Angular, optimisées pour une expérience utilisateur fluide.",
      iconPath: 'M21 16.5v-9L12 3L3 7.5v9l9 4.5l9-4.5ZM12 5.3l6 3v7.4l-6 3l-6-3V8.3l6-3Z'
    },
    {
      title: 'Infrastructure & Réseaux',
      description: "Conception et sécurisation d'architectures réseau pour garantir la haute disponibilité.",
      iconPath: 'M12 2L2 19h20L12 2Zm0 4.8L18.6 17H5.4L12 6.8Z',
      featured: true
    },
    {
      title: 'Conception UI & UX',
      description: "Design moderne et intuitif, centré sur l'utilisateur pour maximiser l'engagement.",
      iconPath: 'm12 16l-7-4.5l7-4.5l7 4.5l-7 4.5Zm0 2.3l7-4.5l1 0.7l-8 5.1l-8-5.1l1-0.7l7 4.5Zm0-11.6l-7 4.5l-1-0.6l8-5.1l8 5.1l-1 0.6l-7-4.5Z'
    }
  ];
}
