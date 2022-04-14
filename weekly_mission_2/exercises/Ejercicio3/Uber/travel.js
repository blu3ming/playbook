class Travel{
    constructor(username,origin,destination,price,authorizedPayment){
        this.username = username
        this.origin = origin
        this.destination = destination
        this.price = price
        this.authorizedPayment = authorizedPayment
    }
    getInfoTravel(){
        return `The travel is from ${this.origin} to ${this.destination}`
    }
    getAuthorizedPayment(){
        if (this.authorizedPayment == true){return `The payment was approved`}
        else{return `The payment was not approved`}
    }
}

const travel = new Travel("blu3ming","Calle Falsa 123 colonia Revolucion Azcapotzalco CDMX","Calle Falsa 423 colonia Revolucion Azcapotzalco CDMX",99,true);
console.log(travel.getInfoTravel());
console.log(travel.getAuthorizedPayment());