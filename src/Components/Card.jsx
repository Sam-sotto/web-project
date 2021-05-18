import React from 'react'
import PageBx from './PageBx';
import './Styles/Card.css';

function Card() {

    return (
        <div className="Card">
            <PageBx title="Bitz" description="This is a web-side Made wiht Vanilla JavaScrip, it's inspireted on e-commerce web" images="/images/export/xypo-page.png"></PageBx>
            <PageBx title="Bitz" description="This is a web-side Made wiht Vanilla JavaScrip, it's inspireted on e-commerce web" images="/images/export/portfolio-page.png"></PageBx>
            <PageBx title="Bitz" description="This is a web-side Made wiht Vanilla JavaScrip, it's inspireted on e-commerce web" images="/images/export/bitz-page.png"></PageBx>
        </div>
    )
}

export default Card;
