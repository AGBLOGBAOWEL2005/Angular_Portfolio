import { Component, computed, inject, output, signal } from '@angular/core';
import { ProjetService } from '../../services/projet-service';
import { ProjetInterf } from '../../interface/projet-interf';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin-service';
import { RouterLink } from '@angular/router';
import { Rechercher } from '../rechercher/rechercher';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule,RouterLink,Rechercher],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  private projetService = inject(ProjetService);
  adminService = inject(AdminService);

  projets = signal<ProjetInterf[]>([]);
  query = signal('');

  projetsFiltres = computed(() => {
    const q = this.query().toLowerCase();
    return this.projets().filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.domaine.toLowerCase().includes(q)
    );
  });

  onEdit = output<ProjetInterf>();

  ngOnInit() {
    this.chargerProjets();
  }

  chargerProjets() {
    this.projetService.getall().subscribe(data => {
      this.projets.set(data);
    });
  }

  deleteProject(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce projet ?')) {
      this.projetService.delete(id).subscribe({
        next: () => {
          this.chargerProjets(); 
        }
      });
    }
  }

  editProject(item: ProjetInterf) {
    this.onEdit.emit(item);
  }
}
