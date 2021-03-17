import React, {useState} from 'react'
import {Form} from 'react-bootstrap'
import {priceFilter} from "../../redux/actions/filterByPrice";
import {useDispatch, useSelector} from "react-redux";


const PriceFilter = ()=>{
    const allItems = useSelector((state=>state.allItems))
    const dispatch = useDispatch()
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)


    const handleMinPriceChange = (e)=>{
        setMin(e.target.value)
    }

    const handleMaxPriceChange = (e)=>{
        setMax(e.target.value)
    }

    const handlePriceFilterSubmit = (e)=>{
        e.preventDefault()
        dispatch(priceFilter(min, max))
    }



    return(
        <div className="filter-wrapper">
            <h4>Filter by price</h4>
            <Form className="price-filter" onSubmit={handlePriceFilterSubmit}>
                <div className="price-filter__wrapper">
                    <div className="price-filter__input-wrapper">
                        <input id="min_input" type="number" placeholder="Min price" onChange={handleMinPriceChange}/>
                    </div>
                    <div className="price-filter__input-wrapper">
                        <input id="min_input" type="number" placeholder="Max price" onChange={handleMaxPriceChange}/>
                    </div>
                    <button type="submit">Filter</button>
                </div>
            </Form>
        </div>
    )
}

export default PriceFilter