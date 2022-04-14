const user = {
    name: "Josue Cruz",
    url: "http://www.facebook.com/ljosuecm",
    friends: 30,
    posts: 14,
    location: "Mexico",
    maritalStatus: "Single",
    age: 24,
    mail: "",
    phone: "",
    getMainInfo: function(){
        return `The user ${this.name} can be found in ${this.url}. Lives in ${this.location} and has ${this.age} years old.`
    },
    getContactInfo: function(){
        if ((this.mail == "") || (this.phone == "")){return `The user ${this.name} doesn't have contact info.`}
        else{return `The user ${this.name} can be found at ${this.mail} and ${this.phone}`}
    }
}

console.log(user.getMainInfo());
console.log(user.getContactInfo());