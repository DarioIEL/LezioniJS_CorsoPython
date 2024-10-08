//Questi dati copiati sono solo un esempio. NON VERRANNO MAI COPIATI all'interno degli script ma, per farne uso, chiameremo direttamente la risorsa prestabilita.

let datiJSON = '{"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}';

let dati = JSON.parse(datiJSON);
console.log(dati);

console.log(dati.data[0].first_name, dati.data[0].last_name);
console.log(dati.data[1].first_name, dati.data[1].last_name);
console.log(dati.data[3].first_name, dati.data[3].last_name);
console.log(dati.data[4].first_name, dati.data[4].last_name);


let demo = document.querySelector("#demo");

//faccio un ciclo for su dati.data

for(let i = 0; i < dati.data.length; i++){
    // demo.innerHTML += "<li>" + dati.data[i].first_name + dati.data[i].last_name + "</li>";
    demo.innerHTML += `<li> ${dati.data[i].first_name} ${dati.data[i].last_name} <img src='${dati.data[i].avatar}'> </li>`;
}



