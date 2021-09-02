import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import usersReducer from './reducers/usersReducer'

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(reducer, composeWithDevTools());


export default store;
