import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {filterAllItems} from "../../redux/actions/getAllItems";
import StoreItem from "./StoreItem";
import ItemsCategoryFilter from "../../components/Filters/ItemsCategoryFilters";

const Store = () => {
    const allItems = useSelector(state => state.allItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filterAllItems())
    }, [dispatch])

    return (
        <div className="store-wrapper">
            <ItemsCategoryFilter allItems={allItems}/>
            <div className="store">
                {
                    allItems.map((item) => {
                        return (
                            <StoreItem item={item} key={Math.random()}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Store