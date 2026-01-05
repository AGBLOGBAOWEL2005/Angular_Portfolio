import { Component,signal,inject,computed, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rechercher',
  imports: [],
  templateUrl: './rechercher.html',
  styleUrl: './rechercher.css',
})
export class Rechercher {
 @Output() searchChanged = new EventEmitter<string>();

onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  this.searchChanged.emit(value); 
}
}

