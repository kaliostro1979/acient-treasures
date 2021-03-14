import {combineReducers} from "redux";
import {mobileMenu} from "./reducers/mobileMenu";
import {sideShoppingCardReducer} from "./reducers/sideShoppingCard";
import {itemsCounter} from "./reducers/itemsCounter";
import {currentItemReducer} from "./reducers/currentItem";
import {allItemsReducer} from "./reducers/allItems";

export const rootReducer = combineReducers({
    mobileMenu: mobileMenu,
    sideShoppingCard: sideShoppingCardReducer,
    itemsCounter: itemsCounter,
    currentItem: currentItemReducer,
    allItems: allItemsReducer
})