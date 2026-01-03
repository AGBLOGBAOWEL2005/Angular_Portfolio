import { Component, inject, output } from '@angular/core';
import { ProjetService } from '../../services/projet-service';
import { ProjetInterf } from '../../interface/projet-interf';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  private projetService = inject(ProjetService);
  adminService = inject(AdminService);

  onEdit = output<ProjetInterf>();

  portfolioinfo$ = this.projetService.getall();

  deleteProject(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce projet ?')) {
      this.projetService.delete(id).subscribe({
        next: () => {
          this.portfolioinfo$ = this.projetService.getall();
        },
        error: (err) => console.error("Erreur suppression :", err)
      });
    }
  }


  editProject(item: ProjetInterf) {

    this.onEdit.emit(item);
  }
}
