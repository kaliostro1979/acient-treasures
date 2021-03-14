import React, {useContext} from 'react'
import {Context} from "../../../context/context";

const ItemCountLabel = ()=>{

    const { allItems } = useContext(Context)

    return(
        <div className="items-count">
            <span>{allItems.length}</span>
        </div>
    )
}

export default ItemCountLabel