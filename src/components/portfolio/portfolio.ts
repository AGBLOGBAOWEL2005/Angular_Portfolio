import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

  // Données avec chemins vers public/images/*.png
  // L'alternance des classes 'md:mt-24' crée l'effet escalier de Venus
  portfolioinfo = [
    {
      id: 1,
      image: 'images/cozycasa.png',
      alt: 'Projet 1',
      title: 'Brand Strategy',
      info: 'Digital Marketing',
      class: ''
    },
    {
      id: 2,
      image: 'images/humans.png',
      alt: 'Projet 2',
      title: 'Visual Identity',
      info: 'Web Design',
      class: 'md:mt-24'
    },
    {
      id: 3,
      image: 'images/mars.png',
      alt: 'Projet 3',
      title: 'App Development',
      info: 'Mobile App',
      class: 'md:-mt-12'
    },
    {
      id: 4,
      image: 'images/panda-logo.png',
      alt: 'Projet 4',
      title: 'Creative Analysis',
      info: 'Consulting',
      class: 'md:mt-12'
    }

   
  ];

  deleteProject(id: number) {
    if(confirm('Voulez-vous vraiment supprimer ce projet ?')) {
      this.portfolioinfo = this.portfolioinfo.filter(p => p.id !== id);
    }
  }

  editProject(item: any) {
    console.log('Edition de:', item.title);
    alert('Modification de : ' + item.title);
  }
}
