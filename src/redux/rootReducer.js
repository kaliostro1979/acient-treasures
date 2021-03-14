import {combineReducers} from "redux";
import {mobileMenu} from "./reducers/mobileMenu";
import {sideShoppingCardReducer} from "./reducers/sideShoppingCard";
import {currentItemReducer} from "./reducers/currentItem";
import {allItemsReducer} from "./reducers/allItems";

export const rootReducer = combineReducers({
    mobileMenu: mobileMenu,
    sideShoppingCard: sideShoppingCardReducer,
    currentItem: currentItemReducer,
    allItems: allItemsReducer
})