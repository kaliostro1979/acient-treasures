import React, {useEffect, useState} from 'react'

const ItemCountLabel = ()=>{

    const [allItems, setAllItems] = useState([])

    const allItemsFromLocalStorage = localStorage.getItem('cardItems')


    useEffect(()=>{
        if(allItemsFromLocalStorage !== null){
            const allItemsA = JSON.parse(allItemsFromLocalStorage)
            setAllItems(allItemsA)
        }
    },[allItemsFromLocalStorage])

    return(
        <div className="items-count">
            <span>{allItems.length}</span>
        </div>
    )
}

export default ItemCountLabel