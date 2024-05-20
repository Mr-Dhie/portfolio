import React from "react";
import './project.css';
import Navbar from '../../container/navbar/Navbar'
import Card from '../../component/card/Card';
import data from './ProjectDetails'


const Project = () =>{
    return (
        <>
        <Navbar/>
        <div className="project__container">
            {data.map((item,index) =>(
                <Card key = {index} {...item}/>
            ))}
        </div>
        </>
    )
}

export default Project