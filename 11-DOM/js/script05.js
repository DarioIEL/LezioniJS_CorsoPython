let filmsLi = document.querySelectorAll("#listaFilm li");

// let titolo1 = filmsLi[0].textContent;

// let link = "<a href='https://it.wikipedia.org/wiki/" + titolo1 +"'> " + titolo1 + "</a>";

// filmsLi[0].innerHTML = link

filmsLi.forEach(li =>{
    let titolo = li.textContent;

    linkAlt = titolo.replaceAll(" ", "_").toLocaleLowerCase();
    console.log(linkAlt);
    

    let link = "<a href='https://it.wikipedia.org/wiki/" + linkAlt +"'> " + titolo + "</a>";
    li.innerHTML = link;
})
