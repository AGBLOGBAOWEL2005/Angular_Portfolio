import { Component, inject, OnInit, input, output, effect } from '@angular/core';
import { Formulaire } from '../formulaire/formulaire';
import { ProjetInterf } from '../../interface/projet-interf';
import { ProjetService } from '../../services/projet-service';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-ajout-projet',
  standalone: true,
  imports: [Formulaire],
  templateUrl: './ajout-projet.html',
  styleUrl: './ajout-projet.css',
})
export class AjoutProjet implements OnInit {
  private projetService = inject(ProjetService);
  adminService = inject(AdminService);
  projetAEditer = input<ProjetInterf | null>(null);
  onFermeModale = output<void>();

  texteDuBouton: string = "+";
  isFormVisible: boolean = false;
  mesProjets: ProjetInterf[] = [];

  constructor() {
    effect(() => {
      if (this.projetAEditer()) {
        this.isFormVisible = true;
      }
    });
  }

  ngOnInit() {
    this.projetService.getall().subscribe({
      next: (data) => this.mesProjets = data
    });
  }

  afficherTexte() { this.texteDuBouton = "Ajouter un projet"; }
  afficherPlus() { this.texteDuBouton = "+"; }
  afficherFormulaire() { this.isFormVisible = true; }


  NotafficherFormulaire(valeur: number) {
    if (valeur === 1) {
      this.isFormVisible = false;
      this.onFermeModale.emit();
    }
  }

  handleSave(projet: ProjetInterf) {
    const editMode = this.projetAEditer();
    if (editMode) {
      this.projetService.update(editMode.id, projet).subscribe({
        next: () => { alert("Projet mis à jour !"); location.reload(); }
      });
    } else {
      const maxId = this.mesProjets.length > 0 ? Math.max(...this.mesProjets.map(p => p.id)) : 0;
      projet.id = maxId + 1;
      this.projetService.add(projet).subscribe({
        next: () => { alert("Projet ajouté !"); location.reload(); }
      });
    }
  }
}
