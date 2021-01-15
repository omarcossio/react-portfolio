import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from "react-router-dom";

function Navigation() {

    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a className="navbar-brand">Omar Cossio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                Home
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/portfolio"
                                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                                Portfolio
                        </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                to="/contact"
                                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                Contact
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>

    )
}

export default Navigation;