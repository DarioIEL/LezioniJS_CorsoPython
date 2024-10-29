class Studente{
    //propr che definiscono lo stato della mia class Studente
    public nome: string;
    public cognome: string;
    public eta: number;
    
    //con private la prop è accessibile solo dall'interno della classe stessa
    private corsi: string[] = [];
    
    constructor(nome: string, cognome: string, eta: number){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    
    iscriviti(nomeCorso: string){
        this.corsi.push(nomeCorso);
    }

    presentati(): string{
        let presentazione: string = `Ciao mi chiamo ${this.nome} frequento il corso di ${this.corsi[0]}`;
        return presentazione;
    }

    leggiCorsi(auth: string): string[] | string{
        if(auth == "Segreteria"){
            let corsi = this.corsi;
            return corsi;
        }else{
            return "Mi spiace non puoi accedere"
        }

    }
}

let primoStudente: Studente = new Studente("Dario", "Mennillo", 35)
primoStudente.iscriviti("informatica");
primoStudente.iscriviti("scienze della terra");
console.log( primoStudente.presentati() );
console.log(primoStudente.nome);
console.log(primoStudente.leggiCorsi("1234"));


//Versione compatta dichiarazione di classe

