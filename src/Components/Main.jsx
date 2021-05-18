import React from 'react'
import { useState } from 'react'
import Card from './Card'
import ReactJs from './ReactJs';
import './Styles/Main.css'

function Main() {

    const [vainilla,setVainilla] = useState( () => {
        return(
            <div className="Main-Card">
            <Card/>
            </div>
       ) 
    });

    const vainillaJs = () => {
        setVainilla( () =>{
            return(
                <div className="Main-Card">
                <Card/>
                </div>
           ) 
        })
    }


    const reactjs = () => {
       setVainilla(() =>{
        return(
            <div className="Main-Card">
            <ReactJs/>
            </div>
       )
       })
    }

    const back = () => {
        setVainilla(() =>{
         return(
             <div className="Main-Card">
                 <div className="null">
                     <h1>Sorry! We are Wornking on this Projets.</h1>
                    
                 </div>
             </div>
        )
        })
     }


    return (
        <div className="Main">
            <div className="buttons">
                <button onClick={vainillaJs}>Vanilla</button>
                <button onClick={reactjs}>React Js</button>
                <button onClick={back}>Backend</button>
            </div>
            <div>
                {vainilla}
            </div>
                
        </div>
    )
}

export default Main
