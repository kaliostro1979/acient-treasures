import React from 'react'
import {Link} from "react-router-dom";

const Button = ()=>{
    return(
        <Link to="/product" className="button">
            Start Shopping
        </Link>
    )
}

export default Button