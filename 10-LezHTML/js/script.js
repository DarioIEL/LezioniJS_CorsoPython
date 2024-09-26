let mioForm = document.getElementById("mioForm");
let btnPulsante = document.getElementById("btnPulsante");


// mioForm.addEventListener("submit", function(){
//     console.log(mioForm);
// })

btnPulsante.addEventListener("click", function(){
    console.log(mioForm.nome.value); //recupero by name 
    console.log(document.getElementById("nome").value);
    console.log(mioForm.email.value);
    console.log(mioForm.commento.value);
    console.log(mioForm.Cookie.checked);

    if(!mioForm.Cookie.checked){
        event.preventDefault();
        alert("Non hai accettato la cookie policy")
    }
    
})