import React from 'react'
import {filter} from "../../redux/actions/filterByCategoryAction";
import {useDispatch} from "react-redux";

const CategoryFilter = (props)=>{

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const currentValue = e.target.value
        dispatch(filter(currentValue, e.target.checked, props.allItems))
    }


    return(
        <div className="filter-wrapper">
            <h4>Filter by category</h4>
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
                <li>
                    <label htmlFor="bracelets">
                        <input type="checkbox" id="bracelets" onChange={handleChange} value="bracelets"/>
                        <span className="fake"> </span>
                        <span className="checkbox_name">Bracelets</span>
                    </label>
                </li>
                <li>
                    <label htmlFor="earrings">
                        <input type="checkbox" id="earrings" onChange={handleChange} value="earrings"/>
                        <span className="fake"> </span>
                        <span className="checkbox_name">Earrings</span>
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default CategoryFilter