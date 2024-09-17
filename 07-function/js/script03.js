let demo = document.getElementById("demo");

// nome e cognome sono i miei 2 parametri
/**
 * 
 * @param {String} nome 
 * @param {String} cognome 
 */
function salutaQualcuno(nome, cognome){
    demo.innerHTML += "<h2> Ciao " + nome + " " + cognome + "</h2>";
}

//Quando rihiamo la funzione devo passare i due parametri
salutaQualcuno("Pippo", "Rossi");
salutaQualcuno("Anna", "Verdi");
salutaQualcuno("Maria", "Gialli");

///GEOMETRIA
function calcolaArea(base, altezza){
    let area = base * altezza;
    return area;
}

//Quando una funzione mi restituisce qualcosa devo "raccoglierlo"
console.log(calcolaArea(4,5));

let miaArea = calcolaArea(8,2);
demo.innerHTML += "La mia area vale: " + miaArea;


function calcolaVolume(base, altezza, profond){
    // let volume = base * altezza * profond;
    let volume = calcolaArea(base, altezza) * profond;
    return volume;
}

console.log(calcolaVolume(6,7,8));


function calcolaVolume2(area, profond){
    let volume = area * profond;
    return volume;
}
//funzioni di callback
console.log(calcolaVolume2(calcolaArea(5,6), 7));


function calcolaVolume3(base, altezza, profond){
    return calcolaArea(base, altezza) * profond;
}

console.log(calcolaVolume3(7,8,9))