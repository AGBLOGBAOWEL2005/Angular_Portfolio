import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminService } from '../../services/admin-service';
import { Router } from '@angular/router';
import { AdminInterf } from '../../interface/admin-interf';

@Component({
  selector: 'app-connecter',
  imports: [FormsModule],
  templateUrl: './connecter.html',
  styleUrl: './connecter.css',
})
export class Connecter {
  private adminService = inject(AdminService);
  private router = inject(Router);
  admin: AdminInterf[] = [];
  handleSubmit(myForm: NgForm) {
    // 1. Extraction deses valeurs du formulaire
    const { login, password } = myForm.value;

    if (!login || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    console.log(login,password);

    // 2. Appel du service
    this.adminService.login(login, password).subscribe({
      next: (admins) => {
        if (admins.length == 1) {
          this.admin = admins;
          // Connexion réussie
          const idAEnregistrer = String(this.admin[0].id);
          localStorage.setItem('id',idAEnregistrer);
          this.adminService.isAdmin.set(true);
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/']);
        } else {
          // Échec
          alert("Identifiants incorrects. Veuillez réessayer.");
        }
      },
      error: (err) => {
        console.error("Erreur lors de la connexion", err);
        alert("Le serveur ne répond pas.");
      }
    });
  }
}
