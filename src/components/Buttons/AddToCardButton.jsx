import React from 'react'
import {handleAddToCard} from "../../redux/actions/cardItemsControl";
import {useDispatch} from "react-redux";


const AddToCardButton = ()=>{

    const dispatch = useDispatch()

    return(
        <button className="product-info__control__add-btn" onClick={() => {
            dispatch(handleAddToCard())
        }}>Add to
            Card
        </button>
    )
}


export default AddToCardButton