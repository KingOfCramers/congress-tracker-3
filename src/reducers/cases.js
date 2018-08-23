// Reducers
const defaultCases = [];
const casesReducer = (state = defaultCases, action) => {
  switch(action.type){
    case "ADD_COURT_CASE" :
      return [...state, action.court_case ];
    case "REMOVE_COURT_CASE" :
      return state.filter((court_case) => {
        return court_case.id !== action.court_case.id;
      });
    default :
      return state
  }
};

export default casesReducer;