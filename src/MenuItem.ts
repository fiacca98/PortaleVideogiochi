export class MenuItem{
    id: string;
    descrizione: string;
    selezionato:boolean;

    constructor(id: string = "home", descrizione: string = "home",selezionato:boolean=false){
        this.id=id;
        this.descrizione=descrizione;
        this.selezionato=selezionato;
    }
    
}