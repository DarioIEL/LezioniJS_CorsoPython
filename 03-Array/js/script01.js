//Gli Array sono dei contenitori di elementi simili tra loro. Gli array hanno proprietà e metodi per poter lavorare con questi elementi
//Gli array sono 0-based
//               0          1       2       3  --> INDICI
let colori = ["rosso", "giallo", "blu", "verde"];

//Richiamo, LEGGO il valore dei miei colori
console.log(colori[0]); //rosso

let primoColore = colori[0];
console.log(primoColore);

let terzoColore = colori[2];
console.log(terzoColore);

console.log(colori);

//aggiungo un elemento
colori.push("viola");

let numElementi = colori.length;
console.log("Il mio array è composto da: " + numElementi + " colori");

console.log(colori);

let coloriInverso = colori.reverse();
console.log(coloriInverso);

//rimuovo l'ultimo elemento di coloriInverso
coloriInverso.pop();
console.log(coloriInverso);


let coloreInesistente = colori[10];
console.log(coloreInesistente);

let numeri = [4, 60, 12, 74, 5];

let elencoStudenti = [
    "Mario Rossi",
    "Pippo Verdi",
    "Laura Bianchi",
    "Anna Gialli",
    "Maria Neri"
];

//Voglio conoscere l'ultimo valore dell'elenco dopo averlo ordinato
console.log(elencoStudenti.sort());

console.log(elencoStudenti[elencoStudenti.length - 1]);


//Per quanto sia possibile creare un array MISTO, non lo fate
let persona = ["Dario", "Mennillo", 35, true];


//Unire due array
let frutta = ["pesca", "anguria", "ciliegia", "nespole"];
let verdura = ["insalata", "zucchina", "melanzana", "peperone", "valeriana"];

let fruttaEVerdura = frutta.concat(verdura);
console.log(fruttaEVerdura);

let fruttaEVerdura2 = [...frutta, ...verdura]; //operatore spread
console.log(fruttaEVerdura2);
// fruttaEVerdura2.forEach(elemento => {
//     console.log(elemento);
// })

//Unisco gli elementi di un array
let nomeArr = ["D", "A", "R", "I", "O"];
let nome = nomeArr.join("");
console.log(nome);

let cognome = "Mennillo";
//voglio trasformare una string in array
let cognomeArr = cognome.split("");
console.log(cognomeArr);

let frase = "Andiamo in pausa";
let frasArr = frase.split(" ");
console.log(frasArr);

//Scrivi il tuo nome in una stringa, ottieni il tuo nome al contrario
let mioNome = "Dario";

let mioNomeInv = mioNome.split("").reverse().join("");
console.log(mioNomeInv);


//let mioNomeArr = mioNome.split("");
//mioNomeArr.reverse();
//let emoNoim = mioNomeArr.join("");
//console.log(emoNoim);

