class PullRequest {
    constructor(title,author,branchName,status,repositoryNameAssociated){
        this.title = title
        this.author = author
        this.branchName = branchName
        this.dateCreated = Date()
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    getStatus(){
        return `Status: ${this.status}`
    }
    getTitleAndAutor(){
        return `Título: ${this.title}. Autor: ${this.author}`
    }
}

const pullRequest = new PullRequest("LaunchX","blu3ming","Primera version","Online","LaunchX");
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAutor());