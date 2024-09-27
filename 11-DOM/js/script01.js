//QUERY SELECTOR, funziona con la sintassi CSS. Recupera sempre uno e un solo elemento
let demo = document.querySelector("#demo");
console.log(demo);
console.log(typeof demo);

let li1 = document.querySelector("#uno");
console.log(li1);
li1.textContent = "Pasta";

//recupero lo stesso div#demo ma utilizzando il tag name. ATT quando ci sono più elementi con lo stesso identificatore recupera sempre e solo la prima occorrenza
let div = document.querySelector("div");
console.log(div);

let feed = document.querySelector("div#feed");
console.log(feed);

let li = document.querySelector("li");
console.log(li);

let li2 = document.querySelector("li.txtOrange");
console.log(li2);
//leggo il contenuto testuale di li2
console.log(li2.textContent);
//modificare il contenuto testuale
li2.textContent = "Andare a fare una passeggiata";
console.log(li2.hasAttribute("class"));
console.log(li2.hasAttribute("id"));



