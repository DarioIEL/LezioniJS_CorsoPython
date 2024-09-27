class Studente{
     
    constructor(nome, cognome, matricola, corso){
        this.nome = nome;
        this.cognome= cognome;
        this.matricola = matricola;
        this.corso = corso;
        
    }



    presentaStud(){
        return "Studente matr: " + this.matricola + " - " + this.nome + " " + this.cognome + " - Corso: " + this.corso;
    }
}

let aula = [
    new Studente("Pippo", "Rossi", 1, "informatica"),
    new Studente("Laura", "Bianchi", 2, "fisica"),
    new Studente("Anna", "Verdi", 3, "matematica"),
]

let mioForm = document.querySelector("#mioForm");
let btnInvia = document.querySelector("#btnInvia");
let elencoAula = document.querySelector("#elencoAula");

// function recuperaValori(){
//     let campiMioForm = mioForm.children; //HTML Collection
//     [...campiMioForm].forEach(campo =>{
//         if(campo.value != undefined && campo.value != ""){   
//             console.log(campo.value);
//         }else{
//             console.log("Stai dimenticando qualcosa");
//         }
//     })
// }

let matricolatore = aula[aula.length - 1].matricola + 1;
document.querySelector("#matricolaStudente").value = matricolatore;

function recuperaValori(){

    let nomeStudente = document.querySelector("#nomeStudente").value;
    let cognomeStudente = document.querySelector("#cognomeStudente").value;
    let matricolaStudente = document.querySelector("#matricolaStudente").value;
    let corsoIscrizione = document.querySelector("#corsoIscrizione").value;

    let nuovoStudente = new Studente(nomeStudente, cognomeStudente, matricolaStudente, corsoIscrizione);

    aula.push(nuovoStudente);

    stampaListaStudenti();
}

btnInvia.addEventListener("click", recuperaValori);

function stampaListaStudenti(){
    elencoAula.innerHTML = "";
    aula.forEach(studente =>{
        elencoAula.innerHTML += "<li>" + studente.presentaStud() + "</li>";
    })
}

stampaListaStudenti();