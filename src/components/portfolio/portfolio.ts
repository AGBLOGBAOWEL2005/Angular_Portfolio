import { Component, inject,OnInit } from '@angular/core';
import { ProjetService } from '../../services/projet-service';
import { ProjetInterf } from '../../interface/projet-interf';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  imports:[CommonModule],
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio{
 private projetService = inject(ProjetService);
  portfolioinfo: Array<ProjetInterf> = []; 

  portfolioinfo$ = this.projetService.getall();

  deleteProject(id: number) {
    if(confirm('Voulez-vous vraiment supprimer ce projet ?')) {
      this.portfolioinfo = this.portfolioinfo.filter(p => p.id !== id);
    }
  }

  editProject(item: any) {
    alert('Modification de : ' + item.title);
  }
}
