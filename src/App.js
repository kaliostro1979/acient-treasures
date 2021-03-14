import React from 'react'
import './assets/scss/style.scss'
import Layout from "./components/Layout";
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import ContextProvider from "./context/context";
import {useDispatch, useSelector} from "react-redux";
import {closeSideShoppingCard} from "./redux/actions/sideShoppingCardStatus";



function App(props) {

    const cardState = useSelector(state=>state.sideShoppingCard)
    const dispatch = useDispatch()



    return (
        <div className="App">
            <ContextProvider>
                <Router>
                    <div className="overlay" style={{ display: cardState.open ? 'block' : 'none' }}
                         onClick={()=>{dispatch(closeSideShoppingCard())}}>

                    </div>
                    <Navigation/>
                    <Layout/>
                </Router>
            </ContextProvider>
        </div>
    );
}

export default App;
