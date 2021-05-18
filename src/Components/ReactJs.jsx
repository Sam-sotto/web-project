import React from 'react'
import PageBx from './PageBx';
import './Styles/Card.css';

function ReactJs() {
    return (
        <div className="Card">
            <PageBx title="Bitz" description="This is a web-side Made wiht Vanilla JavaScrip, it's inspireted on e-commerce web" images="/images/export/show-page.png"></PageBx>
            <PageBx title="Bitz" description="This is a web-side Made wiht Vanilla JavaScrip, it's inspireted on e-commerce web" images="/images/export/travel-page.png"></PageBx>
        </div>
    )
}

export default ReactJs;