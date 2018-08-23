import uuid from "uuid";
// Action generators
export const addCase = ({ case_name = "" } = {}) => ({
  type: "ADD_COURT_CASE",
  court_case: {
    id: uuid(),
    case_name
  }
});

export const removeTweet = ({ id } = {}) => ({
  type: "REMOVE_COURT_CASE",
  court_case: {
    id
  }
});