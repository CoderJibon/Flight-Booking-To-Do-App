import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./RootReducer";

// Redux Store
const Store = createStore(RootReducer, composeWithDevTools());

export default Store;
