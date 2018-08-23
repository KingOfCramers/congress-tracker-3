// Reducer
const defaultLegislation = [];
const legislationReducer = (state = defaultLegislation, action) => {
  switch(action.type){
    case "ADD_LEGISLATION" :
      return [...state, action.legislation]
    case "REMOVE_LEGISLATION" :
      return state.filter((legislation) => {
        return legislation.id !== action.legislation.id
      })
    default :
      return state;
  }
};

export default legislationReducer;