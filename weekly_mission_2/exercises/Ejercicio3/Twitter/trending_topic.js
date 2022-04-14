class TrendingTopic {
    constructor(trends,location,tweet_volume){
        this.trends = trends
        this.location = location
        this.tweet_volume = tweet_volume
    }
    getMainData(){
        return `The No. 1 trending now in ${this.location} is ${this.trends[0]}. All the trending topics in that country has a total of ${this.tweet_volume} tweets`
    }
}

const trendingTopic = new TrendingTopic(['#BlackPink','#Microsoft','#LaunchX','#Node'],"Mexico",2445698);
console.log(trendingTopic.getMainData());