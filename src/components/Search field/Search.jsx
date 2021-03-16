import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {filterAllItems} from "../../redux/actions/getAllItems";

const Search = (props)=>{
    const search = useSelector(state=>state.searchField)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const handleChange = (e)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    useEffect(()=>{
        dispatch(filterAllItems(input))
    },[input])

    props.allItems.filter((i)=>{
        return i.title.match(input)
    })


    return(
        <div className={ search ? "search-main search-main-open" : "search-main"}>
            <input type="text" placeholder="Enter product name" onChange={handleChange}/>
        </div>
    )
}

export default Search