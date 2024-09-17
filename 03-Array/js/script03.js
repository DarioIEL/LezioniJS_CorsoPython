//Recupero l'elemento nel quale stamperò la lista 
let elElencoStudenti = document.getElementById("elElencoStudenti");
let elNumStudenti = document.getElementById("elNumStudenti");

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

// elElencoStudenti.innerHTML = "<li>" + elencoStudenti[0] + "</li>";
// elElencoStudenti.innerHTML += "<li>" + elencoStudenti[1] + "</li>";

elencoStudenti.push("Pierluigi Pierantola");

elencoStudenti.sort();

for (let i = 0; i < elencoStudenti.length; i++) {
    elElencoStudenti.innerHTML += "<li>" + elencoStudenti[i] + "</li>";
}

elNumStudenti.innerHTML = "Studenti iscritti: " + elencoStudenti.length

//giochino delle ore. Voglio ottenere il risultato della somma di tutte le ore presenti in un giorno