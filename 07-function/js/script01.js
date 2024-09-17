// Dichiaro una funzione
function saluta(){
    // corpo della funzione
    let nome = "Dario";
    let cognome = "Mennillo";

    console.log("Ciao " + nome + " " + cognome );
}

//Per eseguire la funzione la devo richiamare
saluta();

//Le funzioni possono essere richiamare quasi ovunque
for(let i = 0; i < 5; i++){
    saluta();
}

/////////////////////////
//demo è una variabile GLOBALE
let demo = document.getElementById("demo");

function benvenuto(){
    // nome, cognome sono variabili LOCALI. Ovvero, vivono solo ed esclusivamente nella funzione
    let nome = "Mario";
    let cognome = "Rossi";

    demo.innerHTML = "Benvenuto " + nome + " " + cognome;
}

benvenuto();

// console.log(nome); //nome is not defined


//variabili GLOBALI
let numeroStudenti = 12;

function contaStudenti(){
    let numeroStudenti = 10;
    demo.innerHTML += "<br>In classe ci sono " + numeroStudenti + " studenti"
    console.log("In classe ci sono " + numeroStudenti + " studenti");
}

contaStudenti();

console.log("Fuori dalla funzione ci sono " + numeroStudenti + " studenti");

//Esempio

let numeroMult2 = 0;

function calcolaMultipliDi2(){
    let numeri = [2, 7, 9, 10, 4];

    for(let i = 0; i < numeri.length; i++){
        if(numeri[i] % 2 == 0){
            console.log(numeri[i] + " è multiplo di 2");
            numeroMult2++;
        }else{
            console.log(numeri[i]);
        }
    }

    console.log("Nel set ci sono " + numeroMult2 + " numeri multipli di 2");
}

calcolaMultipliDi2();