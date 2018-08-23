import React from 'react';
import Case from "./Case";
import { connect } from "react-redux";
import selectCases from "../selectors/cases";

const Cases = (props) => (
  <div>
    {props.cases.map((data,i) => <Case key={i} data={data} /> )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    cases: selectCases(state.cases, state.filters)
  }
};

export default connect(mapStateToProps)(Cases);