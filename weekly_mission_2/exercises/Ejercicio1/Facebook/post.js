const post = {
    user: "Josue Cruz",
    content: "programando para mi curso de Backend con LaunchX",
    date: Date(),
    sharedWith: "Friends",
    location: "",
    status: "",
    attachedMedia: "",
    getMainData: function(){
        return `The user ${this.user} posted "${this.content}" in ${this.date}`
    },
    checkMedia: function(){
        if (this.attachedMedia == ""){return `The post has no attached media`}
        else{return `The attached media is ${this.attachedMedia}`}
    }
}

console.log(post.getMainData());
console.log(post.checkMedia());