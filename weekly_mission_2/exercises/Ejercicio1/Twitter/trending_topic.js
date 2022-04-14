const trending_topic = {
    trends: ['#BlackPink','#Microsoft','#LaunchX','#Node'],
    location: "Mexico",
    tweet_volume: 2445698,
    getMainData: function(){
        return `The No. 1 trending now in ${this.location} is ${this.trends[0]}. All the trending topics in that country has a total of ${this.tweet_volume} tweets`
    }
}

console.log(trending_topic.getMainData());