import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

const TweetFilter = (props) => (
  <div>
    <h3 className="trackerTitle">My Twitter Handles</h3>
    <input placeholder="search..." type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value))
    }}/>
  </div>
);

const mapStateToProps = (state) => { // This lets us determine what aspects of the redux state we want to pass in.
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(TweetFilter);