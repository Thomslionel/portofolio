import { Injectable } from '@angular/core';
import { Personne } from '../../models/PersonneModel';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  personne : Personne ;



  constructor(){
    this.personne = new Personne(
      "Thomas Marie Lionel",
      "MANLY",
      "Developper Full-Stack",
      "Développeur Full-Stack avec plus de 2 ans d’expérience dans la conception d’applications modernes et performantes. Je maîtrise les technologies frontend comme Angular et Flutter, les technologies backend telles que Spring Boot et Node.js et bien d'autres ...",
      "img/personne.png"
    )
  }


  getPersonne() : Personne {
    return this.personne;
  }
  
}
