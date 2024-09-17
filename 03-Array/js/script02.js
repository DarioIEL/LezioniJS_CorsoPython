//Leggere un Array 
let elencoStudenti = [
    "Avagliano Simone",
    "Currà Domenico",
    "Espinoza Jesse",
    "Monello Luca",
    "Palazzo Mattia",
    "Pia Martina",
    "Pistone Daniele",
    "Pourpour Lorenzo",
    "Sette Francesca",
    "Tripodi Lorenzo",
    "Adrianò Roberto",
    "Gilardi Francesco",
    "Khallaf Hamza"
];

console.log(elencoStudenti);

//NOOOOO
// console.log(elencoStudenti[0]);
// console.log(elencoStudenti[1]);
// console.log(elencoStudenti[2]);
// console.log(elencoStudenti[3]);
// console.log(elencoStudenti[4]);
// console.log(elencoStudenti[5]);


for (let i = 0; i < elencoStudenti.length; i++) {
    console.log("Ciao " + elencoStudenti[i]);
}

for (let i = 0; i < 5; i++) {
    console.log("l'indice vale: " + i);
    console.log("Sei al giro numero " + (i + 1));
}

for (let i = 1; i <= 5; i++) {
    console.log("l'indice vale: " + i);
    console.log("Sei al giro numero " + (i));
}

//STAMPO il mio elenco studenti al contrario senza l'utilizzo del metodo reverse()
for (let i = elencoStudenti.length - 1; i >= 0; i--) {
    console.log(elencoStudenti[i]);
}

console.log("////////////////////////////////");


for (let i = 0; i < elencoStudenti.length; i++) {

    let nomeArr = elencoStudenti[i].split(" "); //[cognome, nome]
    //console.log(nomeArr);
    console.log("Nome: " + nomeArr[1] + " Cognome: " + nomeArr[0]);
}


console.log("////////FOREACH////////////");
//Il foreach è un costrutto tipico e utilizzato solo sugli array

elencoStudenti.forEach(studente => {
    console.log(studente);
})

console.log("Stampo al Contrario con ForEach");

elencoStudenti.reverse().forEach(studente => {
    console.log(studente);
})


console.log("Stampo nome e cognome");
elencoStudenti.forEach(studente => {
    const [cognome, nome] = studente.split(" ");
    console.log(`Nome: ${nome} Cognome: ${cognome}`);

})

