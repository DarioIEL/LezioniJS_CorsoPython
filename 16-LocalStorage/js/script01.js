class Persona{
    constructor(nome, cognome){
        this.nome = nome;
        this.cognome = cognome;
    }
}

let pers = new Persona("Paolo", "Bianchi");

function salvaInLS(){
    let persJSON = JSON.stringify(pers);
    localStorage.setItem("persona", persJSON);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", salvaInLS);


function recuperaDaLS(){
    let informazione = localStorage.getItem("persona");
    console.log(informazione);
    let infoOBJ = JSON.parse(informazione);
    console.log(infoOBJ);
    
    
}

let btnR = document.getElementById("btnR");
btnR.addEventListener("click", recuperaDaLS);

function pulisciLS(){
    localStorage.clear();
}

pulisciLS();


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
}
  
function showPosition(position) {
console.log("Latitude: " + position.coords.latitude + 
"Longitude: " + position.coords.longitude)
}

getLocation()


console.log(document.querySelector("#btnData").getAttribute("data-paperino"));
  