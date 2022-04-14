class User {
    constructor(name,url,friends,posts,location,maritalStatus,age,mail,phone){
        this.name = name
        this.url = url
        this.friends = friends
        this.posts = posts
        this.location = location
        this.maritalStatus = maritalStatus
        this.age = age
        this.mail = mail
        this.phone = phone
    }
    getMainInfo(){
        return `The user ${this.name} can be found in ${this.url}. Lives in ${this.location} and has ${this.age} years old.`
    }
    getContactInfo(){
        if ((this.mail == "") || (this.phone == "")){return `The user ${this.name} doesn't have contact info.`}
        else{return `The user ${this.name} can be found at ${this.mail} and ${this.phone}`}
    }
}

const nuevoUsuario = new User("Josue Cruz","http://www.facebook.com/ljosuecm",30,14,"Mexico","Single",24,"","")
console.log(nuevoUsuario.getMainInfo());
console.log(nuevoUsuario.getContactInfo());