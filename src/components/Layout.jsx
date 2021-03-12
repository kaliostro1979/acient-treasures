import React from 'react'
import Home from "../Pages/Home";
import {Route} from "react-router";




const Layout = ()=>{
    return (
        <>
            <Route path="/" component={Home}/>
        </>
    )
}

export default Layout