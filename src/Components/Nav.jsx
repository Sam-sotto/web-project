import React from 'react'
import './Styles/Nav.css'
import {Link} from 'react-router-dom'
import LongMenu from './NavBtn'


function Nav() {

    return (
        <div className="Nav">
                <img className="lgo" src="/images/logo.png" alt="logo"/>
                
                <LongMenu/>


            <div className="anchors">
               <Link to="/" ><li><a href="Portfolio" className="links">Portfolio</a></li></Link> 
                <Link to="Skills"><li> <a href="Skills" className="links">Skills</a></li></Link>
                <Link to="Contact"><li><a href="Contact" className="links">Contact</a></li></Link>
            </div>

        </div>
    )
}

export default Nav
