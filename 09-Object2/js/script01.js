//Utilizzo una funzione costruttore per poter creare il mio oggetto
function User(username, email, password, messaggio){
    //creo delle prop alle quali associo il valore del parametro
    this.username = username;
    this.email = email;
    this.password = password;
    this.messaggio = messaggio;

    this.info = function(){
        return `Ciao, io sono ${this.username} - ${this.email} - ${this.messaggio}`;
    }
}

//Queste sotto sono istanze
let user1 = new User("Maria", "maria@maria.com", "", "Mi chiamo Maria");
let user2 = new User("Pippo", "pippo@rossi.com", "12334566");
let user3 = new User("Anna", "anna@verdi.it", "sadvs0987");

console.log(user1.username);
console.log(user1.email);
console.log(user1.info());
console.log(user2.info());
console.log(user3.info());

let utentiRegistrati = [
    user1,
    user2,
    user3,
    new User("Marco", "marco@bianchi.it", "9087kjh0897"),
    new User("Luisa", "luisa@luise.it", "poiqwklj0'8")
]

//Stampo resoconto di tutti i miei utenti
console.log("RESOCONTO");

utentiRegistrati.forEach(utente =>{
    console.log(utente.info());
})


let btnInvia = document.getElementById("btnInvia");
let btnStampa = document.getElementById("btnStampa");
let demo = document.getElementById("demo");


function registraUtente(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let messaggio = document.getElementById("messaggio").value;

    let user = new User(username, email, password, messaggio);

    utentiRegistrati.push(user);

    document.getElementById("mioForm").reset();
}

btnInvia.addEventListener("click", registraUtente);

function stampaListaUser(){
    demo.innerHTML = "";
    utentiRegistrati.forEach(utente=>{
        demo.innerHTML += `<h4>${utente.info()}</h4>`;
    })
}

btnStampa.addEventListener("click", stampaListaUser);
