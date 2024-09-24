let automobile = {
    
    marca: "Subaru",
    modello: "Baracca",
    cilindrata: 2000,
    colore: "blu opaco",
    stripLed: true,
    trasmissione: "automatica",

    marciaAttuale: 0,
    velocita: 0,
    numGiri: 0,
    stato: false,

    descrivi(){
        let descrizione= `Auto: ${this.marca} ${this.modello}, cilindrata: ${this.cilindrata}, colore: ${this.colore}`;
        return descrizione;
    },

    accendi(){
        if(this.stato){
            return "L'auto è già accesa"
        }else{
            this.stato = true;
            this.numGiri = 1000;
            return "Hai appena acceso l'auto"
        }
    },

    spegni(){
        if(!this.stato){
            return "L'auto è già spenta"
        }else{
            this.stato = false;
            this.numGiri = 0;
            this.velocita = 0;
            this.marciaAttuale = 0;
            return "Hai appena spento l'auto"
        }
    },

    guidaAuto(numGiri, marciaAttuale){
        this.calcolaVelocita(numGiri, marciaAttuale);

        if(this.stato){
            return `stai guidando l'auto alla velocità di: ${this.velocita} km/h`
        }else{
            return "Non hai ancora acceso l'auto"
        }
    },

    calcolaVelocita(numGiri, marciaAttuale){
        this.numGiri = numGiri;
        this.marciaAttuale = marciaAttuale;

        this.velocita = this.numGiri * this.marciaAttuale / 100;
    }

}

console.log(automobile.numGiri);

console.log(automobile.accendi());
console.log(automobile.numGiri);

console.log(automobile.guidaAuto(3500, 2));
console.log(automobile.numGiri);

console.log(automobile.spegni());

console.log(automobile.velocita);
console.log(automobile.numGiri);

console.log(automobile.spegni());


console.log(automobile.marca);
console.log(automobile['marca']); //Questa notazione è utile nel forin

//FOR IN
for (const prop in automobile) {

    if(typeof automobile[prop] != "function"){
        console.log(automobile[prop]);
    }
    
}

