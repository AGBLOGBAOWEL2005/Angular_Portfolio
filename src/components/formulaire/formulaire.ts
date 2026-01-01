import { Component, output } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  imports: [],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
     onAnnuler = output<any>();
     annuler(){
      this.onAnnuler.emit(0);
     }
}
