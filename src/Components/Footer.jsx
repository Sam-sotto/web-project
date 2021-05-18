import React from 'react'
import './Styles/Footer.css'


function Footer() {
    return (
        <div className="Footer">  
        <hr></hr>   
         <div className="container">
            <div className="row">
                <div className="Footer-col-2">
                    <img className="logo" src="/images/logo2.png" alt=""></img>
                </div>
                <div className="Footer-col-3">
                    <h3>Social Network</h3>
                    <img className="imago" src="https://img.icons8.com/ios/64/000000/github.png" alt=""/>
                    <img  className="imago"src="https://img.icons8.com/ios/50/000000/linkedin-circled--v2.png" alt=""/>
                </div>
                <div className="Footer-col-4">
                    <h3>Infos</h3>
                    <p>Brand New, Wed Developer <br/>Buenos Aires, Argentina</p>
                </div>
            </div>

        </div>
        <hr></hr>
            <p className="Copyright">Copyright 2020 -Sam Sotto</p>
    </div>
    )
}

export default Footer;
