import React from 'react'
import {Link} from "react-router-dom";
import {productsUrl} from "../URL";

const Button = ()=>{
    return(
        <Link to={productsUrl} className="button">
            Start Shopping
        </Link>
    )
}

export default Button