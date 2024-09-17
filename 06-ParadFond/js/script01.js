// Sintassi
//if(condizione){
//      corpo
// }else{
// }

let punteggio = 48;

if( punteggio >= 50 ){
    console.log("Bravo, hai superato il livello");
} else{
    console.log("Mi spiace, livello non superato");
}

let password = "CiaoPippo!";

if(password == "CiaoPippo!"){
    console.log("Bravo, puoi entrare");
} else{
    console.log("Password errata");
}

if(password != "CiaoPippo!"){
    console.log("Password errata");
}else{
    console.log("Benvenuto");
}

//il === confronta  sia il valore sia il tipo

if(20 === "20"){
    console.log("I due valori sono identici");
}else{
    console.log("I due valori sono diversi"); //perché il tipo è diverso
}

if(20 == "20"){
    console.log("I due valori sono identici");
}else{
    console.log("I due valori sono diversi"); //perché il tipo è diverso
}


/////////////////////Esempio

let skill = 35;
let puntiVita = 29;

// Per superare il livello devo avere i punti > 30 e le skill > 40

if(skill >= 30 && puntiVita >= 40){
    console.log("Bravo, hai superato il livello");
}else{
    console.log("Mi spiace, livello non superato");
}


//Per superare il livello basta che uno dei due sia sopra la soglia
if(skill >= 30 || puntiVita >= 40){
    console.log("Bravo, hai superato il livello");
}else{
    console.log("Mi spiace, livello non superato");
}


//Esempio con else-if

//Docente
let votoScritto = 17;
let votoOrale = 17;

if(votoScritto >= 18 && votoOrale >=18){
    console.log("Esame superato");
    
}else if(votoScritto < 18 && votoOrale >= 18){
    console.log("Hai passato solo l'orale, lo scritto è andato male");
}else if(votoScritto >= 18 && votoOrale < 18){
    console.log("Hai passato solo lo scritto, l'orale è andato male");
}else{
    console.log("Mi spiace non hai passato né lo scritto né l'orale");
}

