//Dichiaro delle variabili

//TIPO STRING, utilizzo le ""
let mioNome = "Dario";
let mioCognome = 'Mennillo';

//Vado a concatenare le due stringhe
let saluto = "Ciao " + mioNome + " " + mioCognome;

//Per il backtick ALT + 96
let saluto2 = `Ciao ${mioNome} ${mioCognome}`;

console.log(saluto);
console.log(saluto2);

//Istanzio una variabile numerica
let miaEta = 35;

let saluto3 = "Ciao " + mioNome + " " + mioCognome + ", hai " + miaEta + " anni";

console.log(saluto3);

// + OPERATORE somma/concatenazione
let num1 = 5;  //number
let num2 = "3"; //string;

let somma = num1 + num2;
console.log(somma); //53

//prova 2 
let num3 = "6";
let num4 = "4";

let somma2 = num3 + num4; //64
console.log(somma2);
//CAST del dato: forzare una variabile in un determinato tipo
let somma2B = Number(num3) + Number(num4);
console.log(somma2B); //10

let prod2 = num3 * num4;
console.log(prod2); //24

let div2 = num3 / num4;
console.log(div2);

let sott2 = num3 - num4;
console.log(sott2);


let mioNumero = 68;
let tuoNumero = 72;

let sommaMioETuo = mioNumero + tuoNumero;
console.log(sommaMioETuo);

console.log("La somma vale " + (mioNumero + tuoNumero));
console.log(mioNumero + tuoNumero + " La somma vale ");

//TIPO BOOLEAN
let vero = true;
let falso = false;

let acceso = false;

let presenzaDario = true;

// ESEMPIO di varibile con valore che cambia

let oraAttuale = 15;
console.log("Sono le ore: " + oraAttuale);

//passa un po' di tempo e RIASSEGNO la mia variabile senza utilizzare let
oraAttuale = 16;
console.log("Sono le ore: " + oraAttuale);

oraAttuale = 17;
console.log("Sono le ore: " + oraAttuale);
console.log(typeof oraAttuale);

oraAttuale = "diciotto";
console.log("Sono le ore " + oraAttuale);
console.log(typeof oraAttuale);


let miaS1 = "Ciao";
let miaS2 = "Mondo";

let prodS = miaS1 * miaS2; //NaN
