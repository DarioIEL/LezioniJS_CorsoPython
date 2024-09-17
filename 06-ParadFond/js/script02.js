//i++ operatore di post-incremento

// For Classico
for(let i = 0; i < 10; i++){
    console.log(i);
}

let colori = ["bianco", "rosso", "arancione", "verde", "blu"];

for(let i = 0; i < colori.length; i++){
    console.log(colori[i]);
}

//Esempio pari dispari
let numeri = [10, 13, 17, 29, 20, 42, 33, 11];

for(let i = 0; i < numeri.length; i++){
    if(numeri[i] % 2 == 0){
        console.log("Il numero " + numeri[i] + " è pari");
    }else{
        console.log("Il numero " + numeri[i] + " è dispari");
    }
}


for(let i = 1; i <= 100; i++){
    
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + " Multiplo di 3 e 5");
        
    }else if(i % 3 == 0){
        console.log(i + " Multiplo di 3");
    }else if(i % 5 == 0){
        console.log(i + " Multpilo di 5");
    }
    else{
        console.log(i);
    }
}


//For-each, tipico degli array si serve delle arrow function
console.log("FOR EACH");

colori.forEach(colore => {
    console.log(colore);
})

//fOROF
console.log("FOR OF");

for (const colore of colori) {
    console.log(colore);   
}

//const piGreco = Math.PI

//forIn utile negli oggetti ?????
console.log("FOR IN");

for (const colore in colori) {
    console.log(colori[colore]);
}
