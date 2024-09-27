//Con il QUERY SELECTOR ALL recupero tutti gli elementi presenti nella pagina che rispettano quella sintassi CSS

let lis = document.querySelectorAll("li"); //Ottengo SEMPRE una NodeList, anche quando l'oggetto che recupera è singolo
console.log(lis);
console.log(typeof lis);
//li devo trattare come array
console.log(lis[2]);

//Stampo in console il testo presente in tutti gli li
// for(let i = 0; i < lis.length; i++){
//     console.log(lis[i].textContent);
// }

lis.forEach(li =>{
    console.log(li.textContent);
})


let h1 = document.querySelectorAll("h1");
console.log(h1);
console.log(h1[0]);


//Voglio recuperare solo gli li della todoList
// let lisToDoList = document.querySelectorAll("li.txtOrange");
// let lisToDoList = document.querySelectorAll("div#feed li");
// let lisToDoList = document.querySelectorAll("#feed #todo li");
let lisToDoList = document.querySelectorAll("#todo li");
// let lisToDoList = document.querySelector("#todo").children;
console.log(lisToDoList);

lisToDoList.forEach(li =>{
    li.textContent = "Da fare: " + li.textContent;
    
    li.addEventListener("click", function(){
        
        li.textContent = "fATTO: " + li.textContent;
        li.setAttribute("class", "txtUnderline");
    })
})



