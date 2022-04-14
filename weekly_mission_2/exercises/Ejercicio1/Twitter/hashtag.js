const hashtag = {
    name: "#BlackPink",
    query: "%23BlackPink",
    url: "http://twitter.com/search?q=BlackPink",
    tweet_volume: 21122,
    getMainData: function(){
        return `The hashtag ${this.name} has now ${this.tweet_volume} tweets`
    }
}

console.log(hashtag.getMainData());