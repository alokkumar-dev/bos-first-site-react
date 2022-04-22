import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getReducer } from "./reducer";
const reducer = combineReducers({
    petData: getReducer
})

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
