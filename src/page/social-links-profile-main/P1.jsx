import React from "react";
import jessica from './assets/images/avatar-jessica.jpeg'
import './p1.css'

const P1 = () =>{
    return (
        <div className='page'>
        <div className='page__container'>
            <div className='page__container-profile'>
                <img src={jessica} alt="profile" /> 
                <p>Jessica Randall</p>
                <p>London, United Kingdom</p>
                <p>"Front-end developer and  avid reader."</p>
            </div>
            <div className='page__container-links'>
                <button type='button'>Github</button>
                <button type='button'>Frontend Mentor</button>
                <button type='button'>Linkedin</button>
                <button type='button'>Twitter</button>
                <button type='button'>Instagram</button>
            </div>
            
        </div>
        </div>
    )
}

export default P1