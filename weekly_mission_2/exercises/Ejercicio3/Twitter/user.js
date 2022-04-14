class User {
    constructor(name,biography,location,username,following,followers,numberTweets){
        this.name = name
        this.biography = biography
        this.location = location
        this.username = username
        this.joinDate = Date()
        this.following = following
        this.followers = followers
        this.numberTweets = numberTweets
    }
    getPersonalData(){
        return `Name: ${this.name}. Username: ${this.username}. Location: ${this.location}`
    }
    getFollowers(){
        return `Following: ${this.following} people. Followers: ${this.followers} people`
    }
}

const user = new User("blu3ming","Hi. Im a Software Developer in Google.","Mexico","blu3ming",330,112,20);
console.log(user.getPersonalData());
console.log(user.getFollowers());