import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {filter} from "../../redux/actions/filterByCategoryAction";



const ItemsCategoryFilter = (props) => {


    const dispatch = useDispatch()



    const handleChange = (e)=>{
        dispatch(filter(e.target.value, e.target.checked, props.allItems))
    }



    return (
        <>
            <input type="checkbox" id="rings" onChange={handleChange} value="rings"/>
            <label htmlFor="rings">Rings</label>
            <input type="checkbox" id="chains" onChange={handleChange} value="chains"/>
            <label htmlFor="chains">Chains</label>
        </>
    )
}

export default ItemsCategoryFilter