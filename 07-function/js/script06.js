let btnAdd = document.getElementById("btnAdd");
let listaSpesa = document.getElementById("listaSpesa");

let listaProd = [];
let listaPrezz = [];

function stampaLista() {
    let prodotto = document.getElementById("nomeProd").value;
    let prezzo = Number( document.getElementById("prezzoProd").value );

    if(prodotto != "" && prezzo >= 0){
                
        listaProd.push(prodotto);
        listaPrezz.push(prezzo);
        listaSpesa.innerHTML += "<li>" + prodotto + " " + prezzo + " €" + "</li>";
    }else{
        alert("Hai scritto male qualcosa")
    }

    stampaTotale()
}

btnAdd.addEventListener("click", stampaLista);


let btnTotale = document.getElementById("btnTotale");
let grandTotal = document.getElementById("grandTotal");

function stampaTotale(){
    let totale = 0;

    for(let i = 0; i < listaPrezz.length; i++){
        totale += listaPrezz[i];
    }

    grandTotal.innerHTML = totale + " € "
}

btnTotale.addEventListener("click", stampaTotale);
