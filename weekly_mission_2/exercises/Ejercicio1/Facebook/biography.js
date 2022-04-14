const biography = {
    user: "Josue Cruz",
    location: "Mexico",
    maritalStatus: "Single",
    age: 24,
    biography: "Ingeniero en Computación. Programador en LaunchX. Amanter de la tecnología.",
    getMainData: function(){
        return `The user ${this.user} says "${this.biography}"`
    }
}

console.log(biography.getMainData());