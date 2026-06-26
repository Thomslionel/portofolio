import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Obligatoire pour utiliser *ngIf dans le HTML
import { Personne } from '../../models/PersonneModel';
import { PersonneService } from '../../service/personne-service/personne-service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule], // Ajoute-le bien ici
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  // L'opérateur ! indique à TypeScript que la variable sera initialisée dans ngOnInit
  personne!: Personne; 
  
  txtAffiche: string = '';
  private indexTexte: number = 0;
  private vitesseEcriture: number = 30;

  constructor(private personneService: PersonneService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const data = this.personneService.getPersonne();
    
    if (data) {
      // On affecte la copie à notre variable locale pour l'affichage
      this.personne = data.copy();
      
      if (this.personne.description) {
        this.ecrireDescription();
      }
    } else {
      console.error("Erreur : PersonneService.getPersonne() a renvoyé null ou undefined ! Check ton service.");
    }
  }

 ecrireDescription() {
  
  if (this.personne && this.indexTexte < this.personne.description.length) {
    console.log(this.personne.description.charAt(this.indexTexte));

    this.txtAffiche += this.personne.description.charAt(this.indexTexte);
    this.indexTexte++;

    this.cdr.detectChanges();
    setTimeout(() => this.ecrireDescription(), this.vitesseEcriture);
  }
}
}