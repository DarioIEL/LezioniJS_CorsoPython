let demo = document.querySelector("#demo");

//voglio creare una lista all'interno di demo
// demo.innerHTML = "<li> Ciao</li>";

let li = document.createElement("li"); //li è un object
li.textContent = "Ciao"; //<li>Ciao</li>

demo.appendChild(li);

let li2 = document.createElement("li");
li2.textContent = "Buongiorno";

// demo.appendChild(li2);
demo.prepend(li2);

li2.addEventListener("click", function(){
    demo.removeChild(this);
})


//setAttribute e removeAttribute
li2.setAttribute("class", "txtRed"); 

li.setAttribute("style", "color: rgb(110,17,89)");

li2.removeAttribute("class"); //elimino completamente quell'attributo


