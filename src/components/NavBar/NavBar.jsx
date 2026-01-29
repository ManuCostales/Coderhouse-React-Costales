
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {

    return (
        <header className="header bg-color-dark">
            <nav className="nav">
                <ul className="nav-ul">
                <li className="main-logo">
                    <NavLink className="link-light" to='/'>
                        <span className="font-cursive-1">Claudio</span>
                        <span className="font-cursive-1">Costales</span>
                    </NavLink>
                    {/* <a href="" >
                        
                    </a> */}
                </li>
                <li><NavLink className="font-upper link-light" to="/acerca">ACERCA DE MÍ</NavLink></li>
                <li><NavLink className="font-upper link-light" to="/trabajos">MIS TRABAJOS</NavLink></li>

                </ul>

                <CartWidget></CartWidget>

                <MobileMenu></MobileMenu>

            </nav>
        </header>
    );

}

export default NavBar;