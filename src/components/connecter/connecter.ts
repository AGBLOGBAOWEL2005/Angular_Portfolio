import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminService } from '../../services/admin-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connecter',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './connecter.html',
  styleUrl: './connecter.css',
})
export class Connecter {
  private adminService = inject(AdminService);
  private router = inject(Router);

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
        if (admins.length > 0) {
          // Connexion réussie
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