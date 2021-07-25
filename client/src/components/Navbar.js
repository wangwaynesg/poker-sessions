import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Poker Sessions</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">New session</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;