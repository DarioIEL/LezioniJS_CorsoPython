let demo = document.querySelector("#demo");

//recupero i figli di demo, in questo caso solo uno, la lista
//children si applica solo su oggetti singoli, non si applica su Collection o Nodelist
let lista = demo.children;
console.log(lista); //Restituisce una HTMLCollection

// let lis = lista[0].children;
let lis = lista[0].childNodes; //Sto recuperando i nodi, non i figli (oggetti li)
console.log(lis); //

//FACCIO IL PASSAGGIO A RITROSO
let li1 = document.querySelector("li#uno"); //Pane
console.log(li1);

let genitoreLi1 = li1.parentElement; //ul
console.log(genitoreLi1);

let nonnoLi1 = genitoreLi1.parentElement; //div#demo
console.log(nonnoLi1);

//FirstElementChild, LastElementChild
let li2 = document.querySelector("li#due");

let testoLi2 = li2.firstChild;
console.log(testoLi2);

let filgioDiDemo = demo.firstElementChild;
console.log(filgioDiDemo);

let feed = document.querySelector("#feed");
let ultimoFiglioDiFeed = feed.lastElementChild;
console.log(ultimoFiglioDiFeed);
let ultimoLiDiUl = ultimoFiglioDiFeed.lastElementChild;
console.log(ultimoLiDiUl);








