import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjetService } from '../../services/projet-service';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms';
import { CommentaireInterf } from '../../interface/commentaire-interf';
import { CommentaireService } from '../../services/commentaire-service';

@Component({
  selector: 'app-fiche',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './fiche.html',
  styleUrl: './fiche.css',
})
export class Fiche {
  private route = inject(ActivatedRoute);
  private projetService = inject(ProjetService);
  private commentaireService = inject(CommentaireService);

  idParam = this.route.snapshot.paramMap.get('id');
  projetDeatail$ = this.projetService.getOne(Number(this.idParam));
  commentaire$ = this.commentaireService.getallComments();
  
  isOpen: boolean = false;

  handleSubmit(myForm: NgForm) {
    const { email, commentaire } = myForm.value;

    if (!email || !commentaire) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const nouveauCommentaire: CommentaireInterf = {
      id_projet: Number(this.idParam),
      email: email,
      commentaire: commentaire
    };

    this.commentaireService.addComment(nouveauCommentaire).subscribe({
      next: (res) => {
        console.log("Commentaire ajouté :", res);
        this.isOpen = false;
        myForm.reset();
      },
      error: (err) => console.error("Erreur ajout :", err)
    });
  }

  commenter() { this.isOpen = true; }
  annuler() { this.isOpen = false; }
}
