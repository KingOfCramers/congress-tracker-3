import React from "react";

const Case = (props) => {
  return (
      <div className="caseWrapper">
          <p className="caseText"> {props.data.case_name} </p>
      </div>
  );
}

export default Case;