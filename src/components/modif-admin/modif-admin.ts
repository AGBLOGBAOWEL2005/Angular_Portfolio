import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin-service';
import { AdminInterf } from '../../interface/admin-interf';

@Component({
  selector: 'app-modif-admin',
  imports: [FormsModule],
  templateUrl: './modif-admin.html',
  styleUrl: './modif-admin.css',
})

export class ModifAdmin {
  nouveauLogin: string = '';
  nouveauPassword: string = '';
  adminIdString = signal<string | null>(localStorage.getItem('id'));
  adminId!: number; 

  private adminService = inject(AdminService);

  

  validerChangements() {
   const idActuel = this.adminIdString(); 

  if (!idActuel) {
    alert("Impossible de trouver l'ID de l'administrateur.");
    return;
  }
  this.adminId = Number(idActuel)

    const credentials: Partial<AdminInterf> = {
      login: this.nouveauLogin,
      password: this.nouveauPassword
    };

    this.adminService.updateAdmin(this.adminId, credentials).subscribe({
      next: () => {
        alert('Identifiants admin mis à jour !');
        this.adminService.logout();
      },
      error: (err) => console.error('Erreur MAJ:', err)
    });
  }

}
