//Raccolgo un pezzo di html ed essendo statico lo raccolgo Globalmente
let demo = document.getElementById("demo");

function inviaMessaggio(){
    demo.innerHTML = "Hai appena cliccato sul pulsante";
}


let btn = document.getElementById("btn");

//Sistema vecchiotto di gestione eventi
// btn.onclick = inviaMessaggio;

//Sistema moderno di gestione eventi: EventListener
//3 parametri eventListener ("eventoSenzaOn", nomeFunzione, boolean)
//ATT: la funzione è richiamata, solo in questo caso, senza le parentesi ()
btn.addEventListener("click", inviaMessaggio);
