import React from 'react'
import Line from './Line'
import './Styles/Skills.css'

function Skills() {

    const css = {
        width: "60%"

    }

    const js = {
        width: "45%",
        background: "#ffc107"
    }

    const jssx = {
        width: "45%",
        background: "#17a2b8"
    }


    const databs = {
        width: "30%",
        background: "#28a745"
    }

    const py = {
        width: "25%",
        background: "#6f42c1"
    }

    return (
        <div className="Skills">
            <div className="photo">
                <img src="/images/Skills.jpg" alt=""/>
            </div>
            <div className="pro-bar">
                <Line languages="Css/Sass" size={css} />
                <Line languages="JavaScript" size={js} />
                <Line languages="React Js"  size={jssx} />
                <Line languages="MongoDb/Database" size={databs} />
                <Line languages="Python/Node" size={py}/>
                <Line languages="Git" size={css}/>
            </div>
        </div>
    )
}

export default Skills;

