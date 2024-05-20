import React from "react"
import './card.css'
import {Link} from 'react-router-dom'
const Card = ({title,image,link}) =>{
    return(
        <div className="card__container">
            <div className="card__container-image">
                <img src={image} alt="" />
            </div>
            <div className="card__container-text">
                <h2> {title} </h2>
                <Link to={link}>View Project</Link>
            </div>
        </div>
    )
}

export default Card