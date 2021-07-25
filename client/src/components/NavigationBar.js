import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                <Link to="/" className="navbar-brand">Poker Sessions</Link>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link>
                        <Link to="/create" className="nav-link">New session</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about" className="nav-link">About</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;