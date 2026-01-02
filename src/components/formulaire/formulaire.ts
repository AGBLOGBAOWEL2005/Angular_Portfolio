import { Component, output, input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProjetInterf } from '../../interface/projet-interf';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  editData = input<ProjetInterf | null>(null);
  onAnnuler = output<number>();
  onAdd = output<ProjetInterf>();

  handleSubmit(myForm: NgForm) {
    if (myForm.invalid) return;
    const nomSaisi = myForm.value.image ? myForm.value.image.trim() : "";
    const cleanImage = nomSaisi.replace(/^images\//, "");

    const projetData = {
      ...myForm.value,
      image: `images/${cleanImage}`
    } as ProjetInterf;

    this.onAdd.emit(projetData);
  }

  annuler() {
    this.onAnnuler.emit(1);
  }
}
