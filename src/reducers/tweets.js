// Reducers
const defaultTweetSettings = [];
const tweetReducer = (state = defaultTweetSettings, action) => {
  switch(action.type){
    case "ADD_TWEET" :
      return [...state, action.account ];
    case "REMOVE_TWEET" :
      return state.filter((tweet) => {
        return tweet.id !== action.account.id;
      });
    default :
      return state
  }
};

export default tweetReducer;