// Voglio creare una lista di tecnologie da stampare all'interno della pagina

let tecnologie = ["Html", "JS", "Angular", "React", "CSS"];

// Recupero, attraverso il suo id, l'elemento html nel quale stamperò questo array
//getElementByid() --> metodo
let elTecnologie = document.getElementById("listaTecnologie");
// let elTecnologie = document.querySelector("#listaTecnologie");

//innerHTML --> proprietà 
// elTecnologie.innerHTML = tecnologie; //un po' bruttino

for(let i = 0; i < tecnologie.length; i++){
    elTecnologie.innerHTML += "<li>" + tecnologie[i] + "</li>";
}


let avatarImg = document.getElementById("avatarImg");
avatarImg.src = "../images/avatar-icon.jpg";

