import React from 'react'
import {Link} from "react-router-dom";


const NavigationItems = ()=>{
    return(
        <ul className="navigation-items__list">
            <li>
                <Link to="/vikings">
                    Vikings
                </Link>
            </li>
            <li>
                <Link to="/ancient-egypt">
                    Ancient Egypt
                </Link>
            </li>
            <li>
                <Link to="/celtics">
                    Celtics
                </Link>
            </li>
            <li>
                <Link to="/sale">
                    Sale
                </Link>
            </li>
        </ul>
    )
}

export default NavigationItems