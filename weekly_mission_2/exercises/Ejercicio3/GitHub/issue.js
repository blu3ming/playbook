class Issue {
    constructor(title,repositoryNameAssociated,status,numberOfComments,labels,author){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = Date()
        this.lastUpdated = Date()
    }
    getTitleAndAuthor(){
        return `Título: ${this.title}. Autor: ${this.author}`
    }
    getGeneralInfo(){
        return `This repository ${this.title} was created in ${this.dateCreated} and has ${this.numberOfComments} comments.`
    }
}

const newIssue = new Issue("Semana 2","LaunchX","Online","20",['Semana 1','Ayuda','Ejemplos','JS'],"blu3ming");
console.log(newIssue.labels)
console.log(newIssue.getTitleAndAuthor())
console.log(newIssue.getGeneralInfo())