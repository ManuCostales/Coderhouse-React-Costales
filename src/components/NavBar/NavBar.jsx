
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.scss'

const NavBar = () => {

    return (
        <header className="header bg-color-dark">
            <nav className="nav">
                <ul className="nav-ul">
                <li className="main-logo">
                    <a href="" className="link-light">
                        <span className="font-cursive-1">Claudio</span>
                        <span className="font-cursive-1">Costales</span>
                    </a>
                </li>
                <li><a className="font-upper link-light">ACERCA DE MI</a></li>
                <li><a className="font-upper link-light">MIS TRABAJOS</a></li>

                </ul>

                <CartWidget></CartWidget>

            </nav>
        </header>
    );

}

export default NavBar;