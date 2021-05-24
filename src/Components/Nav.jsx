import React from 'react'
import './Styles/Nav.css'
import {Link} from 'react-router-dom' 
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LongMenu from './NavBtn'


function Nav() {

    const useStyles = makeStyles({
            root: {
                display: 'none',
            },
        })

    const matches = useMediaQuery('(max-width:768px)');

    const classes = useStyles();

    return (

        <div className="Nav">

                <img className="lgo" src="/images/logo.png" alt="logo"/>
                
                {matches && <LongMenu className={classes.root}  />}


            <div className="anchors">
               <Link to="/" ><li><a href="Portfolio" className="links">Portfolio</a></li></Link> 
                <Link to="Skills"><li> <a href="Skills" className="links">Skills</a></li></Link>
                <Link to="Contact"><li><a href="Contact" className="links">Contact</a></li></Link>
            </div>

        </div>
    )
}

export default Nav
