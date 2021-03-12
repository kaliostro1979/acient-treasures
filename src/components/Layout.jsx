import React from 'react'
import Home from "../Pages/Home/Home";
import {Route} from "react-router";
import MobileMenu from "./Mobile menu/MobileMenu";




const Layout = ()=>{
    return (
        <>
            <Route path="/" component={Home}/>
            <MobileMenu/>
        </>
    )
}

export default Layout