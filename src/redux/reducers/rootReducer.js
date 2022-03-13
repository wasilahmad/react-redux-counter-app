import changeCounterReducer from "./changeCounterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: changeCounterReducer
})

export default rootReducer;