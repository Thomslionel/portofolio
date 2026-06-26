export class Personne {
    prenom : string;
    nom : string;
    profession : string ;
    description : string;
    imageUrl : string;


    constructor(prenom : string,
    nom : string,
    profession : string,
    description : string,
imageUrl : string){
        this.description = description;
        this.nom = nom;
        this.prenom = prenom;
        this.profession = profession;
        this.imageUrl = imageUrl;

    }


    copy() : Personne {
        return {...this};
    }
}