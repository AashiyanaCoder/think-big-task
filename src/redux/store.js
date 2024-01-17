import listingpartReducer from "./reducers/listingpartReducer";
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    productListingState : listingpartReducer,
});


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION(), applyMiddleware(thunk));

export default store;