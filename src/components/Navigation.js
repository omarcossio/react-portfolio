import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from "react-router-dom";

function Navigation() {

    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="nav-brand text-white">Omar Cossio</span>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                    >
                        Home
        </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/portfolio"
                        className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                    >
                        Portfolio
        </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
        </Link>
                </li>
            </ul>

            </nav>
        </div>





        // <div>
        //     <ul className="nav nav-tabs">
        //         <li className="nav-item">
        //             <Link
        //                 to="/"
        //                 className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        //             >
        //                 Home
        // </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link
        //                 to="/portfolio"
        //                 className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        //             >
        //                 Portfolio
        // </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link
        //                 to="/contact"
        //                 className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        //             >
        //                 Contact
        // </Link>
        //         </li>
        //     </ul>
        // </div>
    )
}

export default Navigation;