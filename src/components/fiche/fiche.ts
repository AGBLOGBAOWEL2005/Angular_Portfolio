import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjetService } from '../../services/projet-service';
import { ProjetInterf } from '../../interface/projet-interf';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fiche',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fiche.html',
  styleUrl: './fiche.css',
})
export class Fiche  {
  private route = inject(ActivatedRoute);
  private projetService = inject(ProjetService);

  // Récupération de l'ID depuis l'URL
     idParam = this.route.snapshot.paramMap.get('id');

    projetDeatail$ = this.projetService.getOne(Number(this.idParam));
  // projet: ProjetInterf | undefined;
  // ngOnInit() {
  //   // Récupération de l'ID depuis l'URL
  //   const idParam = this.route.snapshot.paramMap.get('id');

  //   this.projetService.getall().subscribe({
  //     next: (res: any) => {
  //       // On gère les deux formats de JSON possibles (tableau direct ou objet .projets)
  //       const liste = Array.isArray(res) ? res : res.projets;

  //       // Utilisation de == pour comparer "1" et 1 sans erreur
  //       this.projet = liste.find((p: any) => p.id == idParam);
  //       console.log(this.projet);
  //     },
  //     error: (err) => console.error("Erreur de chargement", err)
  //   });
  //   console.log(this.projet);
  // }
}
