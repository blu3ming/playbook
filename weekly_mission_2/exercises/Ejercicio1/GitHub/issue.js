const issue = {
    title: "Semana 2",
    repositoryNameAssociated: "LaunchX",
    status: "Online",
    numberOfComments: "20",
    labels: ['Semana 1','Ayuda','Ejemplos','JS'],
    author: "blu3ming",
    dateCreated: Date(),
    lastUpdated: Date(),
    getTitleAndAuthor: function(){
        return `Título: ${this.title}. Autor: ${this.author}`
    },
    getGeneralInfo: function(){
        return `This repository ${this.title} was created in ${this.dateCreated} and has ${this.numberOfComments} comments.`
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())