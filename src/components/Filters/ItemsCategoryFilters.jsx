import React from 'react'
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";


const ItemsCategoryFilter = (props) => {


    return (
        <>
            <CategoryFilter allItems={props.allItems}/>
            <PriceFilter/>
        </>
    )
}

export default ItemsCategoryFilter