import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeroId extends Component {
    render() {
        return (
            <div>
                This is heroes id Page !
                <Link to="/">
                <h1 color="primary">Home</h1>
            </Link>
            </div>

        );
    }
}

export default HeroId;
