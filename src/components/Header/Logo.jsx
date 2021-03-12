import React from 'react'
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <div className="logo">
                <img src="/assets/images/icons/logo.png" alt=""/>
            </div>
        </Link>
    )
}

export default Logo