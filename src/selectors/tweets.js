// Get visible legislation
  const tweetFilter = (tweets, { text, sortBy }) => {
    console.log(tweets);
    return tweets.filter((tweet) => {
      return tweet.handle.toLowerCase().includes(text.toLowerCase());
    })
  }

export default tweetFilter;