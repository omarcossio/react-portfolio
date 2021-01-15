import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from "react-router-dom";

function Navigation() {

    const location = useLocation();

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Omar Cossio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link
                                to="/"
                                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                Home
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link
                                    to="/portfolio"
                                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                                    Portfolio
                        </Link>
                        </li>
                        <li class="nav-item dropdown">
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