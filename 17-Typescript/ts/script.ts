let nome: string = "Dario";
let eta: number = 35;
let interruttore: boolean;
interruttore = false;

let corsi: string[] = ["JS", "HTML", "CSS"];

let numeri: number[] = [2, 10, 5];

let persona: {
    nome: string,
    cognome: string,
    eta: number
} = {
    nome: "Dario",
    cognome: "Mennillo",
    eta: 35
}



let studenti:  {
    nome: string,
    cognome: string,
    matricola: number,
    presenza: boolean
}[] = [
    {
        nome: "Laura",
        cognome: "Verdi",
        matricola: 1,
        presenza: true
    },
    {
        nome: "Luca",
        cognome: "Rossi",
        matricola: 2,
        presenza: false
    }
]

let parola = "Ciao"; //TYPE INFERENCE

//Union type
let nomePersona: string | number = 33;

//ALIAS o Custom Type
type Docente = {
    nome:string,
    cognome: string,
    matricola: number,
    corso: string
}

let docenteJs: Docente =  {
    nome: "Dario",
    cognome: "Mennillo",
    matricola: 1,
    corso: "Front-End"
}

let docentePY: Docente = {
    nome: "Mattia",
    cognome: "Folcarelli",
    matricola: 2,
    corso: "Front-End"
}

function presentati(docente: Docente){
    return "Ciao, mi chiamo " + docente.nome;
}

let demo: any = document.querySelector("#demo");
demo.innerHTML = presentati(docenteJs);