import { combineReducers } from "redux";
import HomeReducer from "./home";
import LoginReducer from "./login";
import HeaderReducer from "./header";
import HostingReducer from "./hosting";

const RootReducer = combineReducers({
    HomeReducer,
    LoginReducer,
    HeaderReducer,
    HostingReducer,
});

export default RootReducer;
