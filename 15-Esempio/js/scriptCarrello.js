let listaCarrello = document.querySelector("#listaCarrello");

function caricaCarrello(){

    const URLCarrello = "http://localhost:3000/carrello";

    fetch(URLCarrello)
    .then(data =>{ 
        return data.json()
    }).then(response =>{

        response.forEach(prod => {
            listaCarrello.innerHTML += `<li class='list-group-item'>${prod.id} ${prod.nome} ${prod.prezzo}</li>`
        });

    })

}

document.addEventListener("DOMContentLoaded", caricaCarrello)