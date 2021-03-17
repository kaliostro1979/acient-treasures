import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {filter} from "../../redux/actions/filterByCategoryAction";


const ItemsCategoryFilter = (props) => {

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(filter(e.target.value, e.target.checked, props.allItems))
    }

    return (
        <ul className="category_filter">
            <li>
                <label htmlFor="rings">
                    <input type="checkbox" id="rings" onChange={handleChange} value="rings"/>
                    <span className="fake"> </span>
                    <span className="checkbox_name">Rings</span>
                </label>
            </li>
            <li>

                <label htmlFor="chains">
                    <input type="checkbox" id="chains" onChange={handleChange} value="chains"/>
                    <span className="fake"> </span>
                    <span className="checkbox_name">Chains</span>
                </label>
            </li>
        </ul>
    )
}

export default ItemsCategoryFilter