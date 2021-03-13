import {combineReducers} from "redux";
import {mobileMenu} from "./reducers/mobileMenu";
import {sideShoppingCardReducer} from "./reducers/sideShoppingCard";

export const rootReducer = combineReducers({
    mobileMenu: mobileMenu,
    sideShoppingCard: sideShoppingCardReducer
})