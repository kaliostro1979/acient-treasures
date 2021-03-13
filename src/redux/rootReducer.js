import {combineReducers} from "redux";
import {mobileMenu} from "./reducers/mobileMenu";
import {sideShoppingCardReducer} from "./reducers/sideShoppingCard";
import {itemsCounter} from "./reducers/itemsCounter";

export const rootReducer = combineReducers({
    mobileMenu: mobileMenu,
    sideShoppingCard: sideShoppingCardReducer,
    itemsCounter: itemsCounter
})