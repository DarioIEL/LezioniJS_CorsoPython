class Studente{
    constructor(nome, cognome, matricola){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
    
    info = function(){
        return `Ciao, mi chiamo ${this.nome} ${this.cognome}, matr: ${this.matricola}`;
    }

    studia(materia){
        return this.info() + " sto studiando " + materia;
    }

    //i metodi static appartengono solo alla classe
    static miometodo = function(){
        return "Ciao dal metodo static"
    }
}

//Nel momento in cui utilizzo laparola chiave new viene creata una nuova istanza della classe Studente. Viene creato un nuovo oggetto di TIPO studente

let studente1 = new Studente("Dario", "Mennillo", 1);
console.log(studente1.info() );
console.log(studente1.studia("informatica"));
console.log(Studente.miometodo());

