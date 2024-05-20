import React from "react";
import Roboto from '../../assets/image/robots-meta.svg'
import Gear from '../../assets/image/gear.png'
import Navbar from '../../container/navbar/Navbar'
import './hero.css'
import { Link } from 'react-router-dom';

const Hero = () =>{
    return (
        <>
        <Navbar/>
            <div className="hero__container">
                <div className="hero__container-link">
                    <h2>Work in progress ...</h2>
                    <img src={Gear} alt="gear" />
                    <Link to="/project"> view project</Link>
                </div>
                <div className="hero__container-image">
                    <img src={Roboto} alt="roboto" />
                </div>
                
            </div>
        </>
    )

}

export default Hero;