import React from 'react';
import './scrapbook.css';
// import one from './images/1.jpg';
import imageData from './image_data';
import ScrapbookImages from './scrapbook_images';


function Scrapbook () {
    const images = imageData.map((img, index) => {
        return (
            <ScrapbookImages key={index} about={img}/>
        );
    });

    return (
        <div className="scrapbook-container">
            {images}        
        </div>
    );
}

export default Scrapbook;