import React from 'react'
import ItemCountLabel from "./ItemsCountLabel";

const SearchButton = ()=>{
    return(
        <div className="navbar-icons bag-icon mobile-bag__icon">
            <ItemCountLabel/>
            <img src="/assets/images/icons/bag-icon.png" alt=""/>
        </div>
    )
}

export default SearchButton