let demo = document.getElementById("demo");
let btnInvia = document.getElementById("btnInvia");



function scriviInfoUtente(){

    //il .value rappresenta il valore del campo input, ovvero ciò che l'utente scrive al suo interno
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;

    // if(nome != "" && cognome != ""){
    //     demo.innerHTML = "Ciao " + nome + " " + cognome;

    //     document.getElementById("nome").value = "";
    //     document.getElementById("cognome").value = "";
    // }else{
    //     demo.innerHTML = "Non hai scritto qualcosa"
    // }

    if(nome.trim() == "" && cognome.trim() != ""){
        demo.innerHTML = "Hai dimenticato il nome";
        document.getElementById("nome").value = "";

    }else if(cognome.trim() == "" && nome.trim() != ""){
        demo.innerHTML = "Hai dimenticato il cognome";
        document.getElementById("cognome").value = "";
    }else if (nome.trim() == "" && cognome.trim() == ""){
        demo.innerHTML = "Hai dimenticato nome e cognome"
        document.getElementById("nome").value = "";
        document.getElementById("cognome").value = "";
    }else{
        demo.innerHTML = "Ciao " + nome + " " + cognome;

        document.getElementById("nome").value = "";
        document.getElementById("cognome").value = "";
    }



    //Migliora il codice: avvisa l'utente quando manca solo il nome, solo il cognome o entrambi
}

btnInvia.addEventListener("click", scriviInfoUtente);