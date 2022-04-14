class Hashtag{
    constructor(name,query,url,tweet_volume){
        this.name = name
        this.query = query
        this.url = url
        this.tweet_volume = tweet_volume
    }
    getMainData(){
        return `The hashtag ${this.name} has now ${this.tweet_volume} tweets`
    }
}

const hashtag = new Hashtag("#BlackPink","%23BlackPink","http://twitter.com/search?q=BlackPink",21122);
console.log(hashtag.getMainData());