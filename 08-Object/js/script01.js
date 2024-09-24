// let persona = ["Dario", "Mennillo", 35, true];

//Oggetto con notazione letterale
let persona = {
    //proprietà
    nome: "Dario",
    cognome: "Mennillo",
    eta: 35,
    presenza: true,

    //metodi
    studia: function(materia){
        // console.log("Ciao mi chiamo " + this.nome + ". Sto studiando questo argomento: " + materia);
        return "Ciao mi chiamo " + this.nome + ". Sto studiando questo argomento: " + materia
    }
}

//Leggo i valori delle prop
console.log(persona.nome);
console.log(persona.cognome);
console.log(persona.studia("Javascript"));

let studente = {
    nome: "Pippo",
    cognome: "Rossi",
    eta: 25,
    esamiRestanti: ["Calcolatori", "Architettura Software", "Database"],
    esamiSostenuti: [
        {
            nomeCorso: "Reti",
            docente: "Mauro Bogliaccino",
            voto: 30,
            strumentazione: {
                nome: "Calibro Palmer",
                brevetto: 1870
            }
        },
        {
            nomeCorso: "Software DevOps",
            docente: "Maria Verdi",
            voto: 28
        },
        {
            nomeCorso: "Matematica",
            docente: "Laura Bianchi",
            voto: 30
        }
    ],


    presentati: function(){
        // let presentazione = "Ciao, mi chiamo " + this.nome + " " + this.cognome;
        //Backtick ALT+96 `
        let presentazione = `Ciao, mi chiamo ${this.nome} ${this.cognome}`;
        return presentazione;
    }
}

console.log(this);



//Leggo alcune prop del mio studente
console.log(studente.nome, studente.cognome);

//Leggo il nome del docente del corso di Matematica
console.log(studente.esamiSostenuti[2].docente);

console.log(studente.presentati());

let demo = document.getElementById("demo");
demo.innerHTML = studente.presentati();


let user1 = {
    username: "Stellina93",
    pass: "1234Ciao",
    connesso: false,

    doLogin: function(){
        if(!this.connesso){
            this.connesso = true;
            return `L'utente ${this.username} è online`;
        }
    },

    doLogout(){
        if(this.connesso){
            this.connesso = false;
            return `L'utente ${this.username} è offline`;
        }
    }
}

console.log(user1.doLogin());
console.log(user1.doLogout());
