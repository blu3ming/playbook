const profile = {
    name: "Josue Cruz",
    username: "blu3ming",
    address: "Calle Falsa 123 colonia Revolucion Azcapotzalco CDMX",
    creditCard: "1122334455667788",
    expDate: "11/23",
    cvv: "111",
    getPersonalData: function(){
        return `The user ${this.username} lives in ${this.address}`
    },
    getPaymentInfo: function(){
        return `The payment info about user ${this.username} is: CC: ${this.creditCard}. ExpDate: ${this.expDate}. CVV: ${this.cvv}`
    }
}

console.log(profile.getPersonalData());
console.log(profile.getPaymentInfo());