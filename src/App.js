import React from 'react'
import Hero from './container/hero/Hero'
// import Navbar from './container/navbar/Navbar'
import Project from './page/project/Project'
import P1 from './page/social-links-profile-main/P1'
import {Routes, Route } from 'react-router-dom'


const App = () =>{
    return(
        <>
           {/* <Navbar/> */}
            <Routes>
                <Route exact path="/" element={<Hero/>} />
                <Route path="/project" element={<Project/>} />
                <Route path="/project/p1" element={<P1/>} />
            </Routes>     

        </>
    )
}

export default App;