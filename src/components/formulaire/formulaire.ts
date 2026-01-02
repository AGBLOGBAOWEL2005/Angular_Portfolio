import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProjetInterf } from '../../interface/projet-interf';

@Component({
  selector: 'app-formulaire',
  imports: [FormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  onAnnuler = output<any>();
  onAdd = output<any>();
  imagePath: string = "";



  handleSubmit(myForm: NgForm) {
    if (myForm.invalid) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    const nomSaisi = myForm.value.image ? myForm.value.image.trim() : "";

    const regexImage = /^[a-zA-Z0-9\-_]+\.(jpg|jpeg|png|webp)$/i;

    if (!regexImage.test(nomSaisi)) {
      alert("Format d'image invalide ! Exemple valide : mon-projet.png (Pas d'espaces ou de caractères spéciaux)");
      return;
    }
    const projetData = {
      ...myForm.value,
      image: `images/${nomSaisi}`
    } as ProjetInterf;;
    console.log(projetData);
    this.onAdd.emit(projetData);
  }
  annuler() {
    this.onAnnuler.emit(0);
  }
}
