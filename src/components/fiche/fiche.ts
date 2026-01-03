import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjetService } from '../../services/projet-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fiche',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fiche.html',
  styleUrl: './fiche.css',
})
export class Fiche {
  private route = inject(ActivatedRoute);
  private projetService = inject(ProjetService);

  idParam = this.route.snapshot.paramMap.get('id');
  projetDeatail$ = this.projetService.getOne(Number(this.idParam));
}
