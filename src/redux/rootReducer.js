import {combineReducers} from "redux";
import {mobileMenu} from "./reducers/mobileMenu";
import {sideShoppingCardReducer} from "./reducers/sideShoppingCard";
import {currentItemReducer} from "./reducers/currentItem";
import {allItemsReducer} from "./reducers/allItems";
import {counterReducer} from "./reducers/counter";
import {removeIconReducer} from "./reducers/removeIcon";
import {cardAllItemsReducer} from "./reducers/cardAllItems";
import {addToShoppingCardReducer} from "./reducers/cardItemsControlReducer";

export const rootReducer = combineReducers({
    mobileMenu: mobileMenu,
    sideShoppingCard: sideShoppingCardReducer,
    currentItem: currentItemReducer,
    allItems: allItemsReducer,
    counter: counterReducer,
    removeIcon: removeIconReducer,
    cardAllItems: cardAllItemsReducer,
    addToCard: addToShoppingCardReducer
})