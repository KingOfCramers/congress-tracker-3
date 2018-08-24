import React from "react";
import { startRemoveTweet } from "../actions/tweets";
import { connect } from "react-redux"
class Tweet extends React.Component {

  render(){
    return (
      <div className="tweetWrapper">
        <p className="tweetText"> {this.props.handle} </p>
        <button onClick={() => {
          this.props.dispatch(startRemoveTweet(this.props._id));
        }}>Click</button>
      </div>
    );
  }
}

export default connect()(Tweet);