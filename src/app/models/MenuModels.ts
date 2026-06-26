export class Menu {
    url! : string;
    nom! : string;



    constructor(url: string, nom : string){
        this.nom = nom;
        this.url = url;
    }


    copy(){
        return {... this};
    }
}