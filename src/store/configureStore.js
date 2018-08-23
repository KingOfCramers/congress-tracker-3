import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// Import reducers
import tweetReducer from "../reducers/tweets";
import legislationReducer from "../reducers/legislation";
import casesReducer from "../reducers/cases";
import filtersReducer from "../reducers/filter";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
    const store = createStore(
      combineReducers({
        tweets: tweetReducer,
        cases: casesReducer,
        legislation: legislationReducer,
        filters: filtersReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};