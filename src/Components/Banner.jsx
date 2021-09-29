import React from 'react'
import './Styles/Banner.css'
import Nav from './Nav'
import Square from './Square'

function Banner() {
    return (
        <div className="banner" style={{backgroundImage: `url('images/bg-5.jpg')`}}>
            <Nav/>
            <Square/>
            <div className="shadow"></div>
        </div>
    )
}

export default Banner
