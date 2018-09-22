import React from 'react';
import './app.css';
import Scrapbook from './scrapbook';
import ScrapbookImages from './scrapbook_images';


function App (props) {
    return (
        <div className="main-container">
            <h1 className="main-title">Scrapbook</h1>
            <Scrapbook/>
        </div>
    );
}

export default App;

