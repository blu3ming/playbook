const travel = {
    username: "blu3ming",
    origin: "Calle Falsa 123 colonia Revolucion Azcapotzalco CDMX",
    destination: "Calle Falsa 423 colonia Revolucion Azcapotzalco CDMX",
    price: 99,
    authorizedPayment: true,
    getInfoTravel: function(){
        return `The travel is from ${this.origin} to ${this.destination}`
    },
    getAuthorizedPayment: function(){
        if (this.authorizedPayment == true){return `The payment was approved`}
        else{return `The payment was not approved`}
    }
}

console.log(travel.getInfoTravel());
console.log(travel.getAuthorizedPayment());