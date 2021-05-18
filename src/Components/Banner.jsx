import React from 'react'
import './Styles/Banner.css'
import Nav from './Nav'
import Square from './Square'

function Banner() {
    return (
        <div className="banner">
            <Nav/>
            <Square/>
            <div className="shadow"></div>
            
            
        </div>
    )
}

export default Banner
