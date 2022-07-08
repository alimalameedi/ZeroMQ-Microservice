import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() { 
    return (
        <nav>
            <Link className="App-link" to="/" exact>Home</Link>
            <Link className="App-link" to="/watch">Watch</Link>
            <Link className="App-link" to="/conversion">Conversion</Link>
        </nav>
    );
};

export default Navigation;