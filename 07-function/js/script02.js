// Posso richiamare una funzione dall'interno di un'altra funzione
function descriviDocente(){
    let nomeDocente = "Fabio";
    console.log("Docente: " + nomeDocente);   

    descriviCorso();
   
}

function descriviCorso(){
    let nomeCorso = "Tecnico Programmatore Python";
    console.log("Il corso è: " + nomeCorso);
}

descriviDocente();

//IIFE - Immediately Invoked Function Expression
(function(){
    console.log("Ciao");
}())