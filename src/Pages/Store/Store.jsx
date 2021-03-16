import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchAllItems} from "../../redux/actions/getAllItems";
import StoreItem from "./StoreItem";
import Search from "../../components/Search field/Search";

const Store = () => {
    const allItems = useSelector(state => state.allItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllItems())
    }, [dispatch])

    return (
        <>
            <Search/>
            <div className="store">
                {
                    allItems.map((item) => {
                        return (
                            <StoreItem item={item} key={Math.random()}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Store