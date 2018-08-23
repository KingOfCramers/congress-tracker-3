import React from 'react';
import TweetList from "./TweetList";
import TweetFilter from "./TweetFilter";
import TweetForm from "./TweetForm";
import { connect } from "react-redux";
import { startAddTweet } from "../actions/tweets";
import { setTextFilter } from "../actions/filters";

const TweetDashboard = (props) => (
  <div>
    <TweetFilter />
    <TweetList />
    <TweetForm onSubmit={(tweet) => {
      props.dispatch(startAddTweet({
        handle: tweet.handle
      }));
    }} />
  </div>
);

export default connect()(TweetDashboard);