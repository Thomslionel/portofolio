export class Projet {
    nom : string;
    imageUrl : string;
    description : string;


    constructor(nom: string, imageUrl : string, description : string)
    {
        this.description = description;
        this.nom = nom;
        this.imageUrl = imageUrl;
    }


    copy() : Projet{
        return {...this};
    }
}