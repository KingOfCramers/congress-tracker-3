import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { startAddTweet } from "../actions/tweets";
import { addCase } from "../actions/cases";

class HomePage extends Component {

  render() {
    return (
      <div>
        <p>This is the home page!</p>
        {/*<p>{ this.state.name ? this.state.name : "Anonymous." }</p>*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => { // This lets us determine what aspects of the redux state we want to pass in.
  return {
    name: "",
    tweets: state.expenses,
    legislation: state.legislation
  }
}

export default connect(mapStateToProps)(HomePage); // "connect" is a higher order component.