var nome = "Dario";
var eta = 35;
var interruttore;
interruttore = false;
var corsi = ["JS", "HTML", "CSS"];
var numeri = [2, 10, 5];
var persona = {
    nome: "Dario",
    cognome: "Mennillo",
    eta: 35
};
var studenti = [
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
];
var parola = "Ciao"; //TYPE INFERENCE
//Union type
var nomePersona = 33;
var docenteJs = {
    nome: "Dario",
    cognome: "Mennillo",
    matricola: 1,
    corso: "Front-End"
};
var docentePY = {
    nome: "Mattia",
    cognome: "Folcarelli",
    matricola: 2,
    corso: "Front-End"
};
function presentati(docente) {
    return "Ciao, mi chiamo " + docente.nome;
}
var demo = document.querySelector("#demo");
demo.innerHTML = presentati(docenteJs);
