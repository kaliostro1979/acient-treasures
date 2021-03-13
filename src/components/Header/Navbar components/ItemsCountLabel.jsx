import React, {useContext} from 'react'
import {Context} from "../../../context/context";

const ItemCountLabel = ()=>{

    const { items } = useContext(Context)

    return(
        <div className="items-count">
            <span>{items.length}</span>
        </div>
    )
}

export default ItemCountLabel