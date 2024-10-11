// INDIPENDENTEMENTE dalla notazione (oggetto letterale, oggetto con classe, oggetto con funzione costruttore), posso sempre tradurre in JSON


//notazione letterale
let studente = {
    nome: "Pippo",
    cognome: "Rossi",
    matricola: 1,
    email: "pippo@rossi.it",
    presenza: true,
    corsi: ["HTML & CSS", "Javascript", "Python"]
}

console.log(studente.nome);
console.log(typeof studente);

//Scrivo lo studente in formato JSON (praticamente una stringa)
let studenteJSON = '{"nome":"pippo", "cognome":"rossi", "matricola": 1, "corsi":["html", "js", "py"]}';

console.log(studenteJSON.nome); //undefined
console.log(typeof studenteJSON);
console.log( studenteJSON);

//////DOCENTE
class Docente {
    constructor(nome, cognome, materia) {
        this.nome = nome;
        this.cognome = cognome;
        this.materia = materia;
    }

    insegna(){
        return "Insegno sul corso di " + this.materia;
    }
}

let docente1 = new Docente("Dario", "Mennillo", "JS");
console.log("Questo docente: ", docente1, "è di tipo: " +  typeof docente1);
console.log(docente1.insegna());


//TRASFORMO questo oggetto in un JSON
let docente1JSON = JSON.stringify(docente1);
console.log(docente1JSON);

//////RESPO CORSO
let respoCorsoJSON = '{"nome": "Egle", "cognome":"Risola", "corsi": ["Python","TSS","Sistemista Reti"] }';

let respoCorso = JSON.parse(respoCorsoJSON);

console.log(respoCorso);
console.log(respoCorso.nome);
