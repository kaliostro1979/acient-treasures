import React from 'react'
import './assets/scss/style.scss'
import Layout from "./components/Layout";
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Header/Navigation";


function App() {
  return (
    <div className="App">
      <Router>
          <Navigation/>
          <Layout/>
      </Router>
    </div>
  );
}

export default App;
