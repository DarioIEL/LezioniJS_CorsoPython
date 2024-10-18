let containerDIV = document.querySelector("#containerDIV");

fetch("https://dummyjson.com/products")
.then(data=>{
    return data.json()
}).then(response =>{

    response.products.forEach(prod => {
        containerDIV.innerHTML += creaCard(prod);
    });


})


function creaCard(prodotto){

    let card = `<div class="col">
          <div class="card" style="width: 18rem;">
                <img src=${prodotto.images[0]} class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${prodotto.title}</h5>
                    <p class="card-text">${prodotto.description}</p>
                    <p class="card-text">${prodotto.price}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
          </div>
       `;

        return card
}