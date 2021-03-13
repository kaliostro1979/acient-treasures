import React from 'react'
import {Link} from "react-router-dom";

const Button = ()=>{
    return(
        <Link to="/products" className="button">
            Start Shopping
        </Link>
    )
}

export default Button