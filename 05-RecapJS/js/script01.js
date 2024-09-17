// Definiamo delle variabili

let nome = "Dario Mennillo";
let eta = 35;
let presenza = true;
let futuraEta = eta + 1;

let fraseBenvenuto = "Ciao " + nome + ", hai " + futuraEta ;

console.log(fraseBenvenuto);
// Stampo la frase di benvenuto nella pagina
let demo = document.getElementById("demo");
demo.innerHTML = fraseBenvenuto;


let num1 = "10";
let num2 = "32";

let risultatoSomma = Number(num1) + Number(num2);
let risultatoMolt = num1 * num2;
let risultatoSott = num1 - num2;
let risultatoDiv = num1 / num2;


console.log(risultatoSomma);
console.log(risultatoMolt);
console.log(risultatoSott);
console.log(risultatoDiv);


let oraDelGiorno = 10;
oraDelGiorno = 11;
oraDelGiorno = "12";
oraDelGiorno = "tredici";
oraDelGiorno = false;

//               0         1       2       3 
let colori = ["rosso", "giallo", "blu", "verde"];
console.log(colori[1]); //per leggere il colore in posizione 1
console.log(colori[colori.length - 1]); //per leggere il colore in ultima posizione
console.log(colori);



