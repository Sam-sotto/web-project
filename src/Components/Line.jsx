import React from 'react'
import './Styles/Skills.css'

const Line = (props) => {
  
    const heighx = {
        height: '5px'
    }


    return (
        <div className="Line">
               <small>{props.languages}</small>
                <div className="progress" style={heighx}>
                     <div className="progress-bar" role="progressbar" style={props.size}  aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
        </div>
    )
}

export default Line;

