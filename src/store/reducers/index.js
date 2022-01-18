import { combineReducers } from "redux";
import HomeReducer from "./home";
import LoginReducer from "./login";
import HeaderReducer from "./header";

const RootReducer = combineReducers({
    HomeReducer,
    LoginReducer,
    HeaderReducer,
});

export default RootReducer;
