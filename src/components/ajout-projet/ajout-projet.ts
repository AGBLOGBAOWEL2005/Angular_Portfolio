import { Component, inject, OnInit } from '@angular/core'; // Ajout de OnInit
import { Formulaire } from '../formulaire/formulaire';
import { ProjetInterf } from '../../interface/projet-interf';
import { ProjetService } from '../../services/projet-service';

@Component({
  selector: 'app-ajout-projet',
  standalone: true,
  imports: [Formulaire],
  templateUrl: './ajout-projet.html',
  styleUrl: './ajout-projet.css',
})
export class AjoutProjet implements OnInit {

  private projetService = inject(ProjetService);

  texteDuBouton: string = "+";
  isFormVisible: boolean = false;

  mesProjets: ProjetInterf[] = [];
  prochainId: number = 1;

  ngOnInit() {
    this.projetService.getall().subscribe({
      next: (data) => {
        this.mesProjets = data;

        if (this.mesProjets.length > 0) {
          const maxId = Math.max(...this.mesProjets.map(p => p.id));
          this.prochainId = maxId + 1;
        }
      },
      error: (err) => console.error("Erreur de récupération :", err)
    });
  }

  afficherTexte() {
    this.texteDuBouton = "Ajouter un projet";
  }

  afficherPlus() {
    this.texteDuBouton = "+";
  }

  afficherFormulaire() {
    this.isFormVisible = true;
  }

  NotafficherFormulaire(valeur: number) {
    if (valeur == 1) {
      this.isFormVisible = false;
    }
  }

  addProjet(projet: ProjetInterf) {
    projet.id = this.prochainId;
    console.log(projet.id)
    this.NotafficherFormulaire(1);

    this.projetService.add(projet).subscribe({
      next: (res) => {
        console.log("Projet ajouté avec succès :", res);

       // this.mesProjets.push(res);

        this.prochainId = this.prochainId + 1;

        alert("Projet ajouté !");
      },
      error: (err) => console.error("Erreur lors de l'ajout :", err),
    });
  }
}