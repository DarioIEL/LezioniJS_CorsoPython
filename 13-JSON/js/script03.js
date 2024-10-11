let demo = document.querySelector("#demo");

let utenti = [];

const URL = "https://reqres.in/api/users"; //ENDPOINT

fetch(URL)
    .then(data =>{
        console.log(data);
        return data.json();
    }).then(response =>{

        //nella response il dato è già parserizzato dal metodo .json()
        console.log(response);
        console.log(response.data[0].first_name);
        
        utenti = response.data;

        // for(let i = 0; i < response.data.length; i++){
        //     demo.innerHTML += "<li> " + response.data[i].first_name + " " + response.data[i].last_name + "<img src ='"+ response.data[i].avatar +"'></li>";
        // }

        response.data.forEach(user => {
            demo.innerHTML += creaRigaUser(user.first_name, user.last_name, user.avatar); 
        });
        
    }).catch((e)=>{
        console.log(e);
    })
    .finally(()=>{

        console.log("Finito");
    })
    

    function creaRigaUser(nome, cognome, avatar){
        let riga = `<li> ${nome} ${cognome} <img src=${avatar}></li>`;
        return riga;
    }

    
    
// setTimeout(()=>{
        
//         console.log(utenti);
// },5000)