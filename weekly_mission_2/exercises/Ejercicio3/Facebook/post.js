class Post{
    constructor(user,content,sharedWith,location,status,attachedMedia){
        this.user = user
        this.content = content
        this.date = Date()
        this.sharedWith = sharedWith
        this.location = location
        this.status = status
        this.attachedMedia = attachedMedia
    }
    getMainData(){
        return `The user ${this.user} posted "${this.content}" in ${this.date}`
    }
    checkMedia(){
        if (this.attachedMedia == ""){return `The post has no attached media`}
        else{return `The attached media is ${this.attachedMedia}`}
    }
}

const newPost = new Post("Josue Cruz","Programando para mi curso de Backend con LaunchX","Friends","","","")
console.log(newPost.getMainData());
console.log(newPost.checkMedia());