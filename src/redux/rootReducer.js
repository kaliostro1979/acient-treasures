import {combineReducers} from "redux";
import {mobileMenu} from "./reducers/mobileMenu";

export const rootReducer = combineReducers({
    mobileMenu: mobileMenu
})