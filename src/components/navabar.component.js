import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Moving Boxes</Link>
                <div className="collapsed navbar-collapse">
                </div>
            </nav>
        )
    }
}

export default Navbar;
