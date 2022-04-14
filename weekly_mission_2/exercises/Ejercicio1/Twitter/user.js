const user = {
    name: "blu3ming",
    biography: "Hi. Im a Software Developer in Google.",
    location: "Mexico",
    username: "blu3ming",
    joinDate: Date(),
    following: 330,
    followers: 112,
    numberTweets: 20,
    getPersonalData: function(){
        return `Name: ${this.name}. Username: ${this.username}. Location: ${this.location}`
    },
    getFollowers: function(){
        return `Following: ${this.following} people. Followers: ${this.followers} people`
    }
}

console.log(user.getPersonalData());
console.log(user.getFollowers());