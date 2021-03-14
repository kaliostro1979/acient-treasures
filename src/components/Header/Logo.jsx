import React from 'react'
import {Link} from "react-router-dom";
import {homeUrl} from "../../URL";

const Logo = () => {
    return (
        <Link to={homeUrl}>
            <div className="logo">
                <img src="/assets/images/icons/logo.png" alt=""/>
            </div>
        </Link>
    )
}

export default Logo