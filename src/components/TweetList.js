import React from 'react';
import Tweet from "./Tweet";
import { connect } from "react-redux";
import tweetFilter from "../selectors/tweets";

const TweetList = (props) => (
  <div>
    {props.tweets.map((data,i) => <Tweet key={i} handle={data.handle} _id={data._id} /> )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    tweets: tweetFilter(state.tweets, state.filters) // must be specific one...
  }
};

export default connect(mapStateToProps)(TweetList);