const pullRequest = {
    title: "LaunchX",
    author: "blu3ming",
    branchName: "Primera version",
    dateCreated: Date(),
    status: "Online",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
        return `Status: ${this.status}`
    },
    getTitleAndAutor: function(){
        return `Título: ${this.title}. Autor: ${this.author}`
    }
}

console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAutor());