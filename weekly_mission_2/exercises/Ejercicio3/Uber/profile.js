class Profile{
    constructor(name,username,address,creditCard,expDate,cvv){
        this.name = name
        this.username = username
        this.address = address
        this.creditCard = creditCard
        this.expDate = expDate
        this.cvv = cvv
    }
    getPersonalData(){
        return `The user ${this.username} lives in ${this.address}`
    }
    getPaymentInfo(){
        return `The payment info about user ${this.username} is: CC: ${this.creditCard}. ExpDate: ${this.expDate}. CVV: ${this.cvv}`
    }
}

const profile = new Profile("Josue Cruz","blu3ming","Calle Falsa 123 colonia Revolucion Azcapotzalco CDMX","1122334455667788","11/23","111");
console.log(profile.getPersonalData());
console.log(profile.getPaymentInfo());