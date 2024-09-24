let user = {
    nome: "",
    email: "",
    password: "",

    info: function(){
        return `${this.nome} ${this.email} ${this.password}`;
    }
}

let btnStampa = document.getElementById("btnStampa");
let demo = document.getElementById("demo");

function registraUser(){

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = String(document.getElementById("password").value);

    if(username != "" && email != "" && password.length >= 8){
        user.nome = username;
        user.email = email;
        user.password = password;

        demo.innerHTML = user.info();

        console.log(user);
        
    }else{
        demo.innerHTML = "<h3> Stai dimenticando qualcosa</h3>";
    }

}

btnStampa.addEventListener("click", registraUser);