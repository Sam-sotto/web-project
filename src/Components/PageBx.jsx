import React from 'react'
import './Styles/PageBx.css'

const PageBx = (props) =>{
    return(
        <div>   
            <div className="box">
                <div className="imgBx">
                <img src={props.images} alt=""></img>
                </div>
            <div className="content">
                    <div>
                         <h2>{props.title}</h2>
                        <p>{props.description}</p>
                        <button className="btn btn-primary btn-sm">Click</button>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default PageBx;