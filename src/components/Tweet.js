import React from "react";
import { removeTweet } from "../actions/tweets";

class Tweet extends React.Component {

  onRemove(e) {
    removeTweet({_id: this.props.data._id});
  };

  render(){
    return (
      <div className="tweetWrapper">
        <p className="tweetText" _id={this.props.data._id} onClick={this.onRemove.bind(this)}> {this.props.data.handle} </p>
      </div>
    );
  }
}

export default Tweet;