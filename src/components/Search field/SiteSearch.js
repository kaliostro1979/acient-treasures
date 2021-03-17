import React, {useState} from 'react'
import {Form} from 'react-bootstrap'
import {useDispatch} from "react-redux";
import {makeSearch} from "../../redux/actions/searchOnSite";

const SiteSearch = (props) => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const handleSearchInput = (e) => {
        setValue(e.target.value)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        dispatch(makeSearch(value))
    }


    return (
        <div className={props.searchField ? "site-search__wrapper site-search__wrapper-open" : "site-search__wrapper"}>
            <Form onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Enter product name" onChange={handleSearchInput}/>
                <button type="submit">Search</button>
            </Form>
        </div>
    )
}

export default SiteSearch