import React from "react";

const Tweet = (props) => {
  return (
      <div className="tweetWrapper">
          <p className="tweetText"> {props.data.handle} </p>
      </div>
  );
}

export default Tweet;