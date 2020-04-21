import React from "react";
import Bounce from 'react-reveal/Bounce';
import {
    BrowserRouter as Router,
    Link,
    Route
  } from 'react-router-dom'

const Landing = () => (
    <>
    <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
        <Bounce left>
            <img style={{width: 700}} src="../../images/pokemon-name.png"></img> 
        </Bounce>
    </div>

    <div className="row" style={{display: 'flex', justifyContent: 'center'}} >
    <div className="landing-pokeball">
        <Bounce right>
            <Link to='/pokedex/1'>
                <img style={{width: 300, paddingTop: 100}} src="../../images/pokeball.png"></img>
            </Link>
        </Bounce>
        </div>
    </div>
    </>
);

export default Landing;