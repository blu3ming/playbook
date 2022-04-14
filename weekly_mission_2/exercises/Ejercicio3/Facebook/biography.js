class Biography {
    constructor(user, location, maritalStatus, age, biography){
        this.user = user
        this.location = location
        this.maritalStatus = maritalStatus
        this.age = age
        this.biography = biography
    }

    getMainData(){
        return `The user ${this.user} has the bio: "${this.biography}"`
    }
}

const biografiaUsuario = new Biography("Josue Cruz", "Mexico", "Single", 24, "Ingeniero en Computación. Programador en LaunchX. Amanter de la tecnología.")
console.log(biografiaUsuario.getMainData());