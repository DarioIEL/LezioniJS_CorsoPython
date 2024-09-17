//Chiedo all'utente dei numeri da sommare tramite prompt
let primoNum = Number(prompt("Inserisci il primo numero"));
let secondoNum = prompt("Inserisci un altro numero");

console.log(primoNum);
console.log(secondoNum);
//ATT: quello che acquisisco attraverso un prompt è una STRING
let somma = primoNum + Number(secondoNum);
console.log("la somma vale " + somma);

//Acquisisco il div id="elRisultato" per scrivere dentro il risultato della somma
let elRisultato = document.getElementById("elRisultato");
//Scrivo nel div appena recuperato 
elRisultato.innerHTML = "La somma vale: " + somma;

///////////////////////
let elBenvenuto = document.getElementById("elBenvenuto");

let nomeCognome = prompt("Inserisci il tuo nome e cognome");
let annoNascita = prompt("Inserisci il tuo anno di nascita");

let eta = 2024 - Number(annoNascita);

elBenvenuto.innerHTML = "Ciao " + nomeCognome + ", hai " + eta + " anni";
