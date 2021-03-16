import React from 'react'
import HomeText from "./HomeText";
import Button from "../../components/Buttons/Button";


const Home = ()=>{
    return(
        <div className="home-main" style={{ backgroundImage: `url(/assets/images/home-bgr.png)` }}>
            <HomeText/>
            <Button/>
        </div>
    )
}

export default Home