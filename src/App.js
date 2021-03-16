import React from 'react'
import './assets/scss/style.scss'
import Layout from "./components/Layout/Layout";
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {closeSideShoppingCard} from "./redux/actions/sideShoppingCardStatus";



function App() {

    const cardState = useSelector(state=>state.sideShoppingCard)
    const dispatch = useDispatch()

    return (
        <div className="App">
                <Router>
                    <div className="overlay" style={{ display: cardState.open ? 'block' : 'none' }}
                         onClick={()=>{dispatch(closeSideShoppingCard())}}>

                    </div>
                    <Navigation/>
                    <Layout/>
                </Router>
        </div>
    );
}

export default App;
