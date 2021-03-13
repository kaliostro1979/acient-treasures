import React from 'react'
import './assets/scss/style.scss'
import Layout from "./components/Layout";
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import ContextProvider from "./context/context";
import {useSelector} from "react-redux";


function App() {

    const cardState = useSelector(state=>state.sideShoppingCard)

    return (
        <div className="App">

            <ContextProvider>
                <Router>
                    <div className="overlay" style={{ display: cardState.open ? 'block' : 'none' }}>

                    </div>
                    <Navigation/>
                    <Layout/>
                </Router>
            </ContextProvider>
        </div>
    );
}

export default App;
