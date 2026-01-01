import { Component, inject,OnInit } from '@angular/core';
import { ProjetService } from '../../services/projet-service';
import { ProjetInterf } from '../../interface/projet-interf';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  imports:[CommonModule],
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio{
 private projetService = inject(ProjetService);
  portfolioinfo: Array<ProjetInterf> = []; 

  portfolioinfo$ = this.projetService.getall();
  //  [
  //   {
  //     id: 1,
  //     image: 'images/P1.jpeg',
  //     alt: 'Plateforme E-commerce de luxe',
  //     title: 'Aura Jewel',
  //     info: 'Angular / Tailwind / Stripe',
  //     class: ''
  //   },
  //   {
  //     id: 2,
  //     image: 'images/P2.jpeg',
  //     alt: 'Dashboard de gestion de cryptomonnaies',
  //     title: 'CryptoStat',
  //     info: 'Tableau de bord / API Temps Réel',
  //     class: 'mt-24'
  //   },
  //   {
  //     id: 3,
  //     image: 'images/P3.jpeg',
  //     alt: 'Application mobile de fitness',
  //     title: 'ZenFlow',
  //     info: 'UI Design / Mobile App',
  //     class: ''
  //   },
  //   {
  //     id: 4,
  //     image: 'images/P4.jpeg',
  //     alt: 'Site de réservation de voyages éco-responsables',
  //     title: 'TerraTravel',
  //     info: 'Node.js / MongoDB',
  //     class: 'mt-24'
  //   },
  //   {
  //     id: 5,
  //     image: 'images/P5.jpeg',
  //     alt: 'Réseau social pour photographes',
  //     title: 'PhosShare',
  //     info: 'Firebase / Image Processing',
  //     class: ''
  //   },
  //   {
  //     id: 6,
  //     image: 'images/P6.jpeg',
  //     alt: 'Application de gestion de tâches IA',
  //     title: 'MindTask AI',
  //     info: 'Intelligence Artificielle / UX',
  //     class: 'mt-24'
  //   }
  // ];

  deleteProject(id: number) {
    if(confirm('Voulez-vous vraiment supprimer ce projet ?')) {
      this.portfolioinfo = this.portfolioinfo.filter(p => p.id !== id);
    }
  }

  editProject(item: any) {
    alert('Modification de : ' + item.title);
  }
}
