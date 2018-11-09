import React from 'react';
import './index.css';

const Loading = () => {
    console.log("oui ")
    return (
        <div className="spinner">
            <div className="cube1"></div>
            <div className="cube2"></div>
        </div>
    );
}

export default Loading;
