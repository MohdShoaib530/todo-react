import { createStore,combineReducers } from "redux";

//import reducers
import todoReducer from "./reducers/todoReducer";

const reducers = combineReducers({todo: todoReducer});

const store = createStore(reducers);

export default store;